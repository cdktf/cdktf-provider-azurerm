# `virtualMachinePacketCapture` Submodule <a name="`virtualMachinePacketCapture` Submodule" id="@cdktf/provider-azurerm.virtualMachinePacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachinePacketCapture <a name="VirtualMachinePacketCapture" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture azurerm_virtual_machine_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.NewVirtualMachinePacketCapture(scope Construct, id *string, config VirtualMachinePacketCaptureConfig) VirtualMachinePacketCapture
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig">VirtualMachinePacketCaptureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig">VirtualMachinePacketCaptureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation">PutStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket">ResetMaximumBytesPerPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession">ResetMaximumBytesPerSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds">ResetMaximumCaptureDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageLocation` <a name="PutStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation"></a>

```go
func PutStorageLocation(value VirtualMachinePacketCaptureStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachinePacketCaptureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId"></a>

```go
func ResetId()
```

##### `ResetMaximumBytesPerPacket` <a name="ResetMaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket"></a>

```go
func ResetMaximumBytesPerPacket()
```

##### `ResetMaximumBytesPerSession` <a name="ResetMaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession"></a>

```go
func ResetMaximumBytesPerSession()
```

##### `ResetMaximumCaptureDurationInSeconds` <a name="ResetMaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds"></a>

```go
func ResetMaximumCaptureDurationInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.VirtualMachinePacketCapture_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.VirtualMachinePacketCapture_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.VirtualMachinePacketCapture_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.VirtualMachinePacketCapture_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachinePacketCapture to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachinePacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachinePacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput">MaximumBytesPerPacketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput">MaximumBytesPerSessionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput">MaximumCaptureDurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput">NetworkWatcherIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput">StorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket">MaximumBytesPerPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession">MaximumBytesPerSession</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds">MaximumCaptureDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId">NetworkWatcherId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter"></a>

```go
func Filter() VirtualMachinePacketCaptureFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a>

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation"></a>

```go
func StorageLocation() VirtualMachinePacketCaptureStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts"></a>

```go
func Timeouts() VirtualMachinePacketCaptureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaximumBytesPerPacketInput`<sup>Optional</sup> <a name="MaximumBytesPerPacketInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput"></a>

```go
func MaximumBytesPerPacketInput() *f64
```

- *Type:* *f64

---

##### `MaximumBytesPerSessionInput`<sup>Optional</sup> <a name="MaximumBytesPerSessionInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput"></a>

```go
func MaximumBytesPerSessionInput() *f64
```

- *Type:* *f64

---

##### `MaximumCaptureDurationInSecondsInput`<sup>Optional</sup> <a name="MaximumCaptureDurationInSecondsInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput"></a>

```go
func MaximumCaptureDurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkWatcherIdInput`<sup>Optional</sup> <a name="NetworkWatcherIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput"></a>

```go
func NetworkWatcherIdInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput"></a>

```go
func StorageLocationInput() VirtualMachinePacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaximumBytesPerPacket`<sup>Required</sup> <a name="MaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket"></a>

```go
func MaximumBytesPerPacket() *f64
```

- *Type:* *f64

---

##### `MaximumBytesPerSession`<sup>Required</sup> <a name="MaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession"></a>

```go
func MaximumBytesPerSession() *f64
```

- *Type:* *f64

---

##### `MaximumCaptureDurationInSeconds`<sup>Required</sup> <a name="MaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds"></a>

```go
func MaximumCaptureDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId"></a>

```go
func NetworkWatcherId() *string
```

- *Type:* *string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachinePacketCaptureConfig <a name="VirtualMachinePacketCaptureConfig" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

&virtualmachinepacketcapture.VirtualMachinePacketCaptureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkWatcherId: *string,
	StorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation,
	VirtualMachineId: *string,
	Filter: interface{},
	Id: *string,
	MaximumBytesPerPacket: *f64,
	MaximumBytesPerSession: *f64,
	MaximumCaptureDurationInSeconds: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId">NetworkWatcherId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket">MaximumBytesPerPacket</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession">MaximumBytesPerSession</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds">MaximumCaptureDurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}.

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId"></a>

```go
NetworkWatcherId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}.

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation"></a>

```go
StorageLocation VirtualMachinePacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaximumBytesPerPacket`<sup>Optional</sup> <a name="MaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket"></a>

```go
MaximumBytesPerPacket *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}.

---

##### `MaximumBytesPerSession`<sup>Optional</sup> <a name="MaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession"></a>

```go
MaximumBytesPerSession *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}.

---

##### `MaximumCaptureDurationInSeconds`<sup>Optional</sup> <a name="MaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds"></a>

```go
MaximumCaptureDurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts"></a>

```go
Timeouts VirtualMachinePacketCaptureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}

---

### VirtualMachinePacketCaptureFilter <a name="VirtualMachinePacketCaptureFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

&virtualmachinepacketcapture.VirtualMachinePacketCaptureFilter {
	Protocol: *string,
	LocalIpAddress: *string,
	LocalPort: *string,
	RemoteIpAddress: *string,
	RemotePort: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress">LocalIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort">LocalPort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress">RemoteIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort">RemotePort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}.

---

##### `LocalIpAddress`<sup>Optional</sup> <a name="LocalIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress"></a>

```go
LocalIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}.

---

##### `LocalPort`<sup>Optional</sup> <a name="LocalPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort"></a>

```go
LocalPort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}.

---

##### `RemoteIpAddress`<sup>Optional</sup> <a name="RemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress"></a>

```go
RemoteIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}.

---

##### `RemotePort`<sup>Optional</sup> <a name="RemotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort"></a>

```go
RemotePort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}.

---

### VirtualMachinePacketCaptureStorageLocation <a name="VirtualMachinePacketCaptureStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

&virtualmachinepacketcapture.VirtualMachinePacketCaptureStorageLocation {
	FilePath: *string,
	StorageAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath">FilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}. |

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}.

---

### VirtualMachinePacketCaptureTimeouts <a name="VirtualMachinePacketCaptureTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

&virtualmachinepacketcapture.VirtualMachinePacketCaptureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachinePacketCaptureFilterList <a name="VirtualMachinePacketCaptureFilterList" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.NewVirtualMachinePacketCaptureFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachinePacketCaptureFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get"></a>

```go
func Get(index *f64) VirtualMachinePacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachinePacketCaptureFilterOutputReference <a name="VirtualMachinePacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.NewVirtualMachinePacketCaptureFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachinePacketCaptureFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress">ResetLocalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort">ResetLocalPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress">ResetRemoteIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort">ResetRemotePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalIpAddress` <a name="ResetLocalIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```go
func ResetLocalIpAddress()
```

##### `ResetLocalPort` <a name="ResetLocalPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort"></a>

```go
func ResetLocalPort()
```

##### `ResetRemoteIpAddress` <a name="ResetRemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```go
func ResetRemoteIpAddress()
```

##### `ResetRemotePort` <a name="ResetRemotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort"></a>

```go
func ResetRemotePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput">LocalIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput">LocalPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput">RemoteIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput">RemotePortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress">LocalIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort">LocalPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress">RemoteIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort">RemotePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalIpAddressInput`<sup>Optional</sup> <a name="LocalIpAddressInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```go
func LocalIpAddressInput() *string
```

- *Type:* *string

---

##### `LocalPortInput`<sup>Optional</sup> <a name="LocalPortInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput"></a>

```go
func LocalPortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RemoteIpAddressInput`<sup>Optional</sup> <a name="RemoteIpAddressInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```go
func RemoteIpAddressInput() *string
```

- *Type:* *string

---

##### `RemotePortInput`<sup>Optional</sup> <a name="RemotePortInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput"></a>

```go
func RemotePortInput() *string
```

- *Type:* *string

---

##### `LocalIpAddress`<sup>Required</sup> <a name="LocalIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress"></a>

```go
func LocalIpAddress() *string
```

- *Type:* *string

---

##### `LocalPort`<sup>Required</sup> <a name="LocalPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort"></a>

```go
func LocalPort() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RemoteIpAddress`<sup>Required</sup> <a name="RemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```go
func RemoteIpAddress() *string
```

- *Type:* *string

---

##### `RemotePort`<sup>Required</sup> <a name="RemotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort"></a>

```go
func RemotePort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachinePacketCaptureStorageLocationOutputReference <a name="VirtualMachinePacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.NewVirtualMachinePacketCaptureStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachinePacketCaptureStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath">StoragePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StoragePath`<sup>Required</sup> <a name="StoragePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```go
func StoragePath() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachinePacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---


### VirtualMachinePacketCaptureTimeoutsOutputReference <a name="VirtualMachinePacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualmachinepacketcapture"

virtualmachinepacketcapture.NewVirtualMachinePacketCaptureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachinePacketCaptureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



