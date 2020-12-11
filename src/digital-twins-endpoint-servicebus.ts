// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointServicebusConfig extends cdktf.TerraformMetaArguments {
  readonly deadLetterStorageSecret?: string;
  readonly digitalTwinsId: string;
  readonly name: string;
  readonly servicebusPrimaryConnectionString: string;
  readonly servicebusSecondaryConnectionString: string;
  /** timeouts block */
  readonly timeouts?: DigitalTwinsEndpointServicebusTimeouts;
}
export interface DigitalTwinsEndpointServicebusTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function digitalTwinsEndpointServicebusTimeoutsToTerraform(struct?: DigitalTwinsEndpointServicebusTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DigitalTwinsEndpointServicebus extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DigitalTwinsEndpointServicebusConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_endpoint_servicebus',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deadLetterStorageSecret = config.deadLetterStorageSecret;
    this._digitalTwinsId = config.digitalTwinsId;
    this._name = config.name;
    this._servicebusPrimaryConnectionString = config.servicebusPrimaryConnectionString;
    this._servicebusSecondaryConnectionString = config.servicebusSecondaryConnectionString;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dead_letter_storage_secret - computed: false, optional: true, required: false
  private _deadLetterStorageSecret?: string;
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string ) {
    this._deadLetterStorageSecret = value;
  }
  public resetDeadLetterStorageSecret() {
    this._deadLetterStorageSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterStorageSecretInput() {
    return this._deadLetterStorageSecret
  }

  // digital_twins_id - computed: false, optional: false, required: true
  private _digitalTwinsId: string;
  public get digitalTwinsId() {
    return this.getStringAttribute('digital_twins_id');
  }
  public set digitalTwinsId(value: string) {
    this._digitalTwinsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinsIdInput() {
    return this._digitalTwinsId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // servicebus_primary_connection_string - computed: false, optional: false, required: true
  private _servicebusPrimaryConnectionString: string;
  public get servicebusPrimaryConnectionString() {
    return this.getStringAttribute('servicebus_primary_connection_string');
  }
  public set servicebusPrimaryConnectionString(value: string) {
    this._servicebusPrimaryConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusPrimaryConnectionStringInput() {
    return this._servicebusPrimaryConnectionString
  }

  // servicebus_secondary_connection_string - computed: false, optional: false, required: true
  private _servicebusSecondaryConnectionString: string;
  public get servicebusSecondaryConnectionString() {
    return this.getStringAttribute('servicebus_secondary_connection_string');
  }
  public set servicebusSecondaryConnectionString(value: string) {
    this._servicebusSecondaryConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusSecondaryConnectionStringInput() {
    return this._servicebusSecondaryConnectionString
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DigitalTwinsEndpointServicebusTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DigitalTwinsEndpointServicebusTimeouts ) {
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
      dead_letter_storage_secret: cdktf.stringToTerraform(this._deadLetterStorageSecret),
      digital_twins_id: cdktf.stringToTerraform(this._digitalTwinsId),
      name: cdktf.stringToTerraform(this._name),
      servicebus_primary_connection_string: cdktf.stringToTerraform(this._servicebusPrimaryConnectionString),
      servicebus_secondary_connection_string: cdktf.stringToTerraform(this._servicebusSecondaryConnectionString),
      timeouts: digitalTwinsEndpointServicebusTimeoutsToTerraform(this._timeouts),
    };
  }
}
