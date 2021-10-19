// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointServicebusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}
  */
  readonly deadLetterStorageSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}
  */
  readonly digitalTwinsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#name DigitalTwinsEndpointServicebus#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}
  */
  readonly servicebusPrimaryConnectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}
  */
  readonly servicebusSecondaryConnectionString: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#timeouts DigitalTwinsEndpointServicebus#timeouts}
  */
  readonly timeouts?: DigitalTwinsEndpointServicebusTimeouts;
}
export interface DigitalTwinsEndpointServicebusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#create DigitalTwinsEndpointServicebus#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#delete DigitalTwinsEndpointServicebus#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#read DigitalTwinsEndpointServicebus#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html#update DigitalTwinsEndpointServicebus#update}
  */
  readonly update?: string;
}

function digitalTwinsEndpointServicebusTimeoutsToTerraform(struct?: DigitalTwinsEndpointServicebusTimeoutsOutputReference | DigitalTwinsEndpointServicebusTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DigitalTwinsEndpointServicebusTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html azurerm_digital_twins_endpoint_servicebus}
*/
export class DigitalTwinsEndpointServicebus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_digital_twins_endpoint_servicebus";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_servicebus.html azurerm_digital_twins_endpoint_servicebus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinsEndpointServicebusConfig
  */
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
  private _deadLetterStorageSecret?: string | undefined; 
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string | undefined) {
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
  private _digitalTwinsId?: string; 
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
  private _name?: string; 
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
  private _servicebusPrimaryConnectionString?: string; 
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
  private _servicebusSecondaryConnectionString?: string; 
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
  private _timeouts?: DigitalTwinsEndpointServicebusTimeouts | undefined; 
  private __timeoutsOutput = new DigitalTwinsEndpointServicebusTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DigitalTwinsEndpointServicebusTimeouts | undefined) {
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
