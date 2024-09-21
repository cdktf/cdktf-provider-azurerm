// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrbitalContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#contact_profile_id OrbitalContact#contact_profile_id}
  */
  readonly contactProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#ground_station_name OrbitalContact#ground_station_name}
  */
  readonly groundStationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#id OrbitalContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#name OrbitalContact#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#reservation_end_time OrbitalContact#reservation_end_time}
  */
  readonly reservationEndTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#reservation_start_time OrbitalContact#reservation_start_time}
  */
  readonly reservationStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#spacecraft_id OrbitalContact#spacecraft_id}
  */
  readonly spacecraftId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#timeouts OrbitalContact#timeouts}
  */
  readonly timeouts?: OrbitalContactTimeouts;
}
export interface OrbitalContactTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#create OrbitalContact#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#delete OrbitalContact#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#read OrbitalContact#read}
  */
  readonly read?: string;
}

export function orbitalContactTimeoutsToTerraform(struct?: OrbitalContactTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function orbitalContactTimeoutsToHclTerraform(struct?: OrbitalContactTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrbitalContactTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrbitalContactTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrbitalContactTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact azurerm_orbital_contact}
*/
export class OrbitalContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_orbital_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrbitalContact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrbitalContact to import
  * @param importFromId The id of the existing OrbitalContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrbitalContact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_orbital_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/orbital_contact azurerm_orbital_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrbitalContactConfig
  */
  public constructor(scope: Construct, id: string, config: OrbitalContactConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_orbital_contact',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactProfileId = config.contactProfileId;
    this._groundStationName = config.groundStationName;
    this._id = config.id;
    this._name = config.name;
    this._reservationEndTime = config.reservationEndTime;
    this._reservationStartTime = config.reservationStartTime;
    this._spacecraftId = config.spacecraftId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_profile_id - computed: false, optional: false, required: true
  private _contactProfileId?: string; 
  public get contactProfileId() {
    return this.getStringAttribute('contact_profile_id');
  }
  public set contactProfileId(value: string) {
    this._contactProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactProfileIdInput() {
    return this._contactProfileId;
  }

  // ground_station_name - computed: false, optional: false, required: true
  private _groundStationName?: string; 
  public get groundStationName() {
    return this.getStringAttribute('ground_station_name');
  }
  public set groundStationName(value: string) {
    this._groundStationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groundStationNameInput() {
    return this._groundStationName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // reservation_end_time - computed: false, optional: false, required: true
  private _reservationEndTime?: string; 
  public get reservationEndTime() {
    return this.getStringAttribute('reservation_end_time');
  }
  public set reservationEndTime(value: string) {
    this._reservationEndTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationEndTimeInput() {
    return this._reservationEndTime;
  }

  // reservation_start_time - computed: false, optional: false, required: true
  private _reservationStartTime?: string; 
  public get reservationStartTime() {
    return this.getStringAttribute('reservation_start_time');
  }
  public set reservationStartTime(value: string) {
    this._reservationStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationStartTimeInput() {
    return this._reservationStartTime;
  }

  // spacecraft_id - computed: false, optional: false, required: true
  private _spacecraftId?: string; 
  public get spacecraftId() {
    return this.getStringAttribute('spacecraft_id');
  }
  public set spacecraftId(value: string) {
    this._spacecraftId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spacecraftIdInput() {
    return this._spacecraftId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrbitalContactTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrbitalContactTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_profile_id: cdktf.stringToTerraform(this._contactProfileId),
      ground_station_name: cdktf.stringToTerraform(this._groundStationName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reservation_end_time: cdktf.stringToTerraform(this._reservationEndTime),
      reservation_start_time: cdktf.stringToTerraform(this._reservationStartTime),
      spacecraft_id: cdktf.stringToTerraform(this._spacecraftId),
      timeouts: orbitalContactTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_profile_id: {
        value: cdktf.stringToHclTerraform(this._contactProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ground_station_name: {
        value: cdktf.stringToHclTerraform(this._groundStationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_end_time: {
        value: cdktf.stringToHclTerraform(this._reservationEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_start_time: {
        value: cdktf.stringToHclTerraform(this._reservationStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spacecraft_id: {
        value: cdktf.stringToHclTerraform(this._spacecraftId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: orbitalContactTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrbitalContactTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
