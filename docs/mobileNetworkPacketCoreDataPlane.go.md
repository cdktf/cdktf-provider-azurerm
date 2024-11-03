# `mobileNetworkPacketCoreDataPlane` Submodule <a name="`mobileNetworkPacketCoreDataPlane` Submodule" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkPacketCoreDataPlane <a name="MobileNetworkPacketCoreDataPlane" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

mobilenetworkpacketcoredataplane.NewMobileNetworkPacketCoreDataPlane(scope Construct, id *string, config MobileNetworkPacketCoreDataPlaneConfig) MobileNetworkPacketCoreDataPlane
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig">MobileNetworkPacketCoreDataPlaneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig">MobileNetworkPacketCoreDataPlaneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Address">ResetUserPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Gateway">ResetUserPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Subnet">ResetUserPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessName">ResetUserPlaneAccessName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts"></a>

```go
func PutTimeouts(value MobileNetworkPacketCoreDataPlaneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserPlaneAccessIpv4Address` <a name="ResetUserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Address"></a>

```go
func ResetUserPlaneAccessIpv4Address()
```

##### `ResetUserPlaneAccessIpv4Gateway` <a name="ResetUserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Gateway"></a>

```go
func ResetUserPlaneAccessIpv4Gateway()
```

##### `ResetUserPlaneAccessIpv4Subnet` <a name="ResetUserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Subnet"></a>

```go
func ResetUserPlaneAccessIpv4Subnet()
```

##### `ResetUserPlaneAccessName` <a name="ResetUserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessName"></a>

```go
func ResetUserPlaneAccessName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

mobilenetworkpacketcoredataplane.MobileNetworkPacketCoreDataPlane_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

mobilenetworkpacketcoredataplane.MobileNetworkPacketCoreDataPlane_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

mobilenetworkpacketcoredataplane.MobileNetworkPacketCoreDataPlane_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

mobilenetworkpacketcoredataplane.MobileNetworkPacketCoreDataPlane_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MobileNetworkPacketCoreDataPlane to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MobileNetworkPacketCoreDataPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkPacketCoreDataPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput">MobileNetworkPacketCoreControlPlaneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4AddressInput">UserPlaneAccessIpv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4GatewayInput">UserPlaneAccessIpv4GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4SubnetInput">UserPlaneAccessIpv4SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessNameInput">UserPlaneAccessNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId">MobileNetworkPacketCoreControlPlaneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address">UserPlaneAccessIpv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway">UserPlaneAccessIpv4Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet">UserPlaneAccessIpv4Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessName">UserPlaneAccessName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeouts"></a>

```go
func Timeouts() MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MobileNetworkPacketCoreControlPlaneIdInput`<sup>Optional</sup> <a name="MobileNetworkPacketCoreControlPlaneIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput"></a>

```go
func MobileNetworkPacketCoreControlPlaneIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="UserPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4AddressInput"></a>

```go
func UserPlaneAccessIpv4AddressInput() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="UserPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4GatewayInput"></a>

```go
func UserPlaneAccessIpv4GatewayInput() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="UserPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4SubnetInput"></a>

```go
func UserPlaneAccessIpv4SubnetInput() *string
```

- *Type:* *string

---

##### `UserPlaneAccessNameInput`<sup>Optional</sup> <a name="UserPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessNameInput"></a>

```go
func UserPlaneAccessNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId"></a>

```go
func MobileNetworkPacketCoreControlPlaneId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserPlaneAccessIpv4Address`<sup>Required</sup> <a name="UserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address"></a>

```go
func UserPlaneAccessIpv4Address() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="UserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway"></a>

```go
func UserPlaneAccessIpv4Gateway() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="UserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet"></a>

```go
func UserPlaneAccessIpv4Subnet() *string
```

- *Type:* *string

---

##### `UserPlaneAccessName`<sup>Required</sup> <a name="UserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessName"></a>

```go
func UserPlaneAccessName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkPacketCoreDataPlaneConfig <a name="MobileNetworkPacketCoreDataPlaneConfig" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

&mobilenetworkpacketcoredataplane.MobileNetworkPacketCoreDataPlaneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MobileNetworkPacketCoreControlPlaneId: *string,
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts,
	UserPlaneAccessIpv4Address: *string,
	UserPlaneAccessIpv4Gateway: *string,
	UserPlaneAccessIpv4Subnet: *string,
	UserPlaneAccessName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId">MobileNetworkPacketCoreControlPlaneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Address">UserPlaneAccessIpv4Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Gateway">UserPlaneAccessIpv4Gateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Subnet">UserPlaneAccessIpv4Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessName">UserPlaneAccessName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}.

---

##### `MobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId"></a>

```go
MobileNetworkPacketCoreControlPlaneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.timeouts"></a>

```go
Timeouts MobileNetworkPacketCoreDataPlaneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#timeouts MobileNetworkPacketCoreDataPlane#timeouts}

---

##### `UserPlaneAccessIpv4Address`<sup>Optional</sup> <a name="UserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Address"></a>

```go
UserPlaneAccessIpv4Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}.

---

##### `UserPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="UserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Gateway"></a>

```go
UserPlaneAccessIpv4Gateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}.

---

##### `UserPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="UserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Subnet"></a>

```go
UserPlaneAccessIpv4Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}.

---

##### `UserPlaneAccessName`<sup>Optional</sup> <a name="UserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessName"></a>

```go
UserPlaneAccessName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}.

---

### MobileNetworkPacketCoreDataPlaneTimeouts <a name="MobileNetworkPacketCoreDataPlaneTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

&mobilenetworkpacketcoredataplane.MobileNetworkPacketCoreDataPlaneTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference <a name="MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworkpacketcoredataplane"

mobilenetworkpacketcoredataplane.NewMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



