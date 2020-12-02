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
  readonly networkWatcherId: string;
  readonly notes?: string;
  readonly outputWorkspaceResourceIds?: string[];
  readonly tags?: { [key: string]: string };
  /** destination block */
  readonly destination?: NetworkConnectionMonitorDestination[];
  /** endpoint block */
  readonly endpoint: NetworkConnectionMonitorEndpoint[];
  /** source block */
  readonly source?: NetworkConnectionMonitorSource[];
  /** test_configuration block */
  readonly testConfiguration: NetworkConnectionMonitorTestConfiguration[];
  /** test_group block */
  readonly testGroup: NetworkConnectionMonitorTestGroup[];
  /** timeouts block */
  readonly timeouts?: NetworkConnectionMonitorTimeouts;
}
export interface NetworkConnectionMonitorDestination {
  readonly address?: string;
  readonly port?: number;
  readonly virtualMachineId?: string;
}
export interface NetworkConnectionMonitorEndpointFilterItem {
  readonly address?: string;
  readonly type?: string;
}
export interface NetworkConnectionMonitorEndpointFilter {
  readonly type?: string;
  /** item block */
  readonly item?: NetworkConnectionMonitorEndpointFilterItem[];
}
export interface NetworkConnectionMonitorEndpoint {
  readonly address?: string;
  readonly name: string;
  readonly virtualMachineId?: string;
  /** filter block */
  readonly filter?: NetworkConnectionMonitorEndpointFilter[];
}
export interface NetworkConnectionMonitorSource {
  readonly port?: number;
  readonly virtualMachineId?: string;
}
export interface NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader {
  readonly name: string;
  readonly value: string;
}
export interface NetworkConnectionMonitorTestConfigurationHttpConfiguration {
  readonly method?: string;
  readonly path?: string;
  readonly port?: number;
  readonly preferHttps?: boolean;
  readonly validStatusCodeRanges?: string[];
  /** request_header block */
  readonly requestHeader?: NetworkConnectionMonitorTestConfigurationHttpConfigurationRequestHeader[];
}
export interface NetworkConnectionMonitorTestConfigurationIcmpConfiguration {
  readonly traceRouteEnabled?: boolean;
}
export interface NetworkConnectionMonitorTestConfigurationSuccessThreshold {
  readonly checksFailedPercent?: number;
  readonly roundTripTimeMs?: number;
}
export interface NetworkConnectionMonitorTestConfigurationTcpConfiguration {
  readonly port: number;
  readonly traceRouteEnabled?: boolean;
}
export interface NetworkConnectionMonitorTestConfiguration {
  readonly name: string;
  readonly preferredIpVersion?: string;
  readonly protocol: string;
  readonly testFrequencyInSeconds?: number;
  /** http_configuration block */
  readonly httpConfiguration?: NetworkConnectionMonitorTestConfigurationHttpConfiguration[];
  /** icmp_configuration block */
  readonly icmpConfiguration?: NetworkConnectionMonitorTestConfigurationIcmpConfiguration[];
  /** success_threshold block */
  readonly successThreshold?: NetworkConnectionMonitorTestConfigurationSuccessThreshold[];
  /** tcp_configuration block */
  readonly tcpConfiguration?: NetworkConnectionMonitorTestConfigurationTcpConfiguration[];
}
export interface NetworkConnectionMonitorTestGroup {
  readonly destinationEndpoints: string[];
  readonly enabled?: boolean;
  readonly name: string;
  readonly sourceEndpoints: string[];
  readonly testConfigurationNames: string[];
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
    this._networkWatcherId = config.networkWatcherId;
    this._notes = config.notes;
    this._outputWorkspaceResourceIds = config.outputWorkspaceResourceIds;
    this._tags = config.tags;
    this._destination = config.destination;
    this._endpoint = config.endpoint;
    this._source = config.source;
    this._testConfiguration = config.testConfiguration;
    this._testGroup = config.testGroup;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_start - computed: true, optional: true, required: false
  private _autoStart?: boolean;
  public get autoStart() {
    return this.getBooleanAttribute('auto_start');
  }
  public set autoStart(value: boolean) {
    this._autoStart = value;
  }
  public resetAutoStart() {
    this._autoStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartInput() {
    return this._autoStart
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: true, optional: true, required: false
  private _intervalInSeconds?: number;
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // network_watcher_id - computed: false, optional: false, required: true
  private _networkWatcherId: string;
  public get networkWatcherId() {
    return this.getStringAttribute('network_watcher_id');
  }
  public set networkWatcherId(value: string) {
    this._networkWatcherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherIdInput() {
    return this._networkWatcherId
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string;
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string ) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes
  }

  // output_workspace_resource_ids - computed: true, optional: true, required: false
  private _outputWorkspaceResourceIds?: string[];
  public get outputWorkspaceResourceIds() {
    return this.getListAttribute('output_workspace_resource_ids');
  }
  public set outputWorkspaceResourceIds(value: string[]) {
    this._outputWorkspaceResourceIds = value;
  }
  public resetOutputWorkspaceResourceIds() {
    this._outputWorkspaceResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputWorkspaceResourceIdsInput() {
    return this._outputWorkspaceResourceIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: NetworkConnectionMonitorDestination[];
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: NetworkConnectionMonitorDestination[] ) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: NetworkConnectionMonitorEndpoint[];
  public get endpoint() {
    return this.interpolationForAttribute('endpoint') as any;
  }
  public set endpoint(value: NetworkConnectionMonitorEndpoint[]) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // source - computed: false, optional: true, required: false
  private _source?: NetworkConnectionMonitorSource[];
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: NetworkConnectionMonitorSource[] ) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // test_configuration - computed: false, optional: false, required: true
  private _testConfiguration: NetworkConnectionMonitorTestConfiguration[];
  public get testConfiguration() {
    return this.interpolationForAttribute('test_configuration') as any;
  }
  public set testConfiguration(value: NetworkConnectionMonitorTestConfiguration[]) {
    this._testConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigurationInput() {
    return this._testConfiguration
  }

  // test_group - computed: false, optional: false, required: true
  private _testGroup: NetworkConnectionMonitorTestGroup[];
  public get testGroup() {
    return this.interpolationForAttribute('test_group') as any;
  }
  public set testGroup(value: NetworkConnectionMonitorTestGroup[]) {
    this._testGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testGroupInput() {
    return this._testGroup
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkConnectionMonitorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkConnectionMonitorTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_start: this._autoStart,
      interval_in_seconds: this._intervalInSeconds,
      location: this._location,
      name: this._name,
      network_watcher_id: this._networkWatcherId,
      notes: this._notes,
      output_workspace_resource_ids: this._outputWorkspaceResourceIds,
      tags: this._tags,
      destination: this._destination,
      endpoint: this._endpoint,
      source: this._source,
      test_configuration: this._testConfiguration,
      test_group: this._testGroup,
      timeouts: this._timeouts,
    };
  }
}
