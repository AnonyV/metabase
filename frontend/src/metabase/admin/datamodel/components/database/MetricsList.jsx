import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { t } from "ttag";
import MetricItem from "./MetricItem.jsx";

export default class MetricsList extends Component {
  static propTypes = {
    tableMetadata: PropTypes.object.isRequired,
    onRetire: PropTypes.func.isRequired,
  };

  render() {
    const { onRetire, tableMetadata } = this.props;
    const { metrics = [] } = tableMetadata;

    return (
      <div id="MetricsList" className="my3">
        <div className="flex mb1">
          <h2 className="px1 text-green">{t`Metrics`}</h2>
          <Link
            to={"/admin/datamodel/metric/create?table=" + tableMetadata.id}
            data-metabase-event="Data Model;Add Metric Page"
            className="flex-align-right float-right text-bold text-brand no-decoration"
          >
            + {t`Add a Metric`}
          </Link>
        </div>
        <table className="AdminTable">
          <thead>
            <tr>
              <th style={{ minWidth: "200px" }}>{t`Name`}</th>
              <th className="full">{t`Definition`}</th>
              <th>{t`Actions`}</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map(metric => (
              <MetricItem
                key={metric.id}
                metric={metric}
                onRetire={onRetire}
                tableMetadata={tableMetadata}
              />
            ))}
          </tbody>
        </table>
        {metrics.length === 0 && (
          <div className="flex layout-centered m4 text-medium">
            {t`Create metrics to add them to the View dropdown in the query builder`}
          </div>
        )}
      </div>
    );
  }
}
