// https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkConnectionMonitorConfig extends TerraformMetaArguments {
  readonly autoStart?: boolean;
  readonly intervalInSeconds?: number;
  readonly location: string;
  readonly name: string;
  readonly networkWatcherName: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** destination block */
  readonly destination: NetworkConnectionMonitorDestination[];
  /** source block */
  readonly source: NetworkConnectionMonitorSource[];
  /** timeouts block */
  readonly timeouts?: NetworkConnectionMonitorTimeouts;
}
export interface NetworkConnectionMonitorDestination {
  readonly address?: string;
  readonly port: number;
  readonly virtualMachineId?: string;
}
export interface NetworkConnectionMonitorSource {
  readonly port?: number;
  readonly virtualMachineId: string;
}
export interface NetworkConnectionMonitorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkConnectionMonitor extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkConnectionMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_connection_monitor',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStart = config.autoStart;
    this._intervalInSeconds = config.intervalInSeconds;
    this._location = config.location;
    this._name = config.name;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._destination = config.destination;
    this._source = config.source;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start - computed: false, optional: true, required: false
  private _autoStart?: boolean;
  public get autoStart() {
    return this._autoStart;
  }
  public set autoStart(value: boolean | undefined) {
    this._autoStart = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // interval_in_seconds - computed: false, optional: true, required: false
  private _intervalInSeconds?: number;
  public get intervalInSeconds() {
    return this._intervalInSeconds;
  }
  public set intervalInSeconds(value: number | undefined) {
    this._intervalInSeconds = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName: string;
  public get networkWatcherName() {
    return this._networkWatcherName;
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // destination - computed: false, optional: false, required: true
  private _destination: NetworkConnectionMonitorDestination[];
  public get destination() {
    return this._destination;
  }
  public set destination(value: NetworkConnectionMonitorDestination[]) {
    this._destination = value;
  }

  // source - computed: false, optional: false, required: true
  private _source: NetworkConnectionMonitorSource[];
  public get source() {
    return this._source;
  }
  public set source(value: NetworkConnectionMonitorSource[]) {
    this._source = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkConnectionMonitorTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetworkConnectionMonitorTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_start: this._autoStart,
      interval_in_seconds: this._intervalInSeconds,
      location: this._location,
      name: this._name,
      network_watcher_name: this._networkWatcherName,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      destination: this._destination,
      source: this._source,
      timeouts: this._timeouts,
    };
  }
}
