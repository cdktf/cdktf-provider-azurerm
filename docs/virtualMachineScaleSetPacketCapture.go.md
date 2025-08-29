# `virtualMachineScaleSetPacketCapture` Submodule <a name="`virtualMachineScaleSetPacketCapture` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetPacketCapture <a name="VirtualMachineScaleSetPacketCapture" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture azurerm_virtual_machine_scale_set_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.NewVirtualMachineScaleSetPacketCapture(scope Construct, id *string, config VirtualMachineScaleSetPacketCaptureConfig) VirtualMachineScaleSetPacketCapture
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig">VirtualMachineScaleSetPacketCaptureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig">VirtualMachineScaleSetPacketCaptureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope">PutMachineScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation">PutStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMachineScope">ResetMachineScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerPacket">ResetMaximumBytesPerPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerSession">ResetMaximumBytesPerSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumCaptureDurationInSeconds">ResetMaximumCaptureDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMachineScope` <a name="PutMachineScope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope"></a>

```go
func PutMachineScope(value VirtualMachineScaleSetPacketCaptureMachineScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putMachineScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

---

##### `PutStorageLocation` <a name="PutStorageLocation" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation"></a>

```go
func PutStorageLocation(value VirtualMachineScaleSetPacketCaptureStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachineScaleSetPacketCaptureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetId"></a>

```go
func ResetId()
```

##### `ResetMachineScope` <a name="ResetMachineScope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMachineScope"></a>

```go
func ResetMachineScope()
```

##### `ResetMaximumBytesPerPacket` <a name="ResetMaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerPacket"></a>

```go
func ResetMaximumBytesPerPacket()
```

##### `ResetMaximumBytesPerSession` <a name="ResetMaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumBytesPerSession"></a>

```go
func ResetMaximumBytesPerSession()
```

##### `ResetMaximumCaptureDurationInSeconds` <a name="ResetMaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetMaximumCaptureDurationInSeconds"></a>

```go
func ResetMaximumCaptureDurationInSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineScaleSetPacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCapture_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCapture_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCapture_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCapture_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachineScaleSetPacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachineScaleSetPacketCapture to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachineScaleSetPacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSetPacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList">VirtualMachineScaleSetPacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScope">MachineScope</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference">VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference">VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference">VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScopeInput">MachineScopeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacketInput">MaximumBytesPerPacketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSessionInput">MaximumBytesPerSessionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSecondsInput">MaximumCaptureDurationInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherIdInput">NetworkWatcherIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocationInput">StorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetIdInput">VirtualMachineScaleSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacket">MaximumBytesPerPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSession">MaximumBytesPerSession</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSeconds">MaximumCaptureDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherId">NetworkWatcherId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filter"></a>

```go
func Filter() VirtualMachineScaleSetPacketCaptureFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList">VirtualMachineScaleSetPacketCaptureFilterList</a>

---

##### `MachineScope`<sup>Required</sup> <a name="MachineScope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScope"></a>

```go
func MachineScope() VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference">VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference</a>

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocation"></a>

```go
func StorageLocation() VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference">VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeouts"></a>

```go
func Timeouts() VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference">VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MachineScopeInput`<sup>Optional</sup> <a name="MachineScopeInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.machineScopeInput"></a>

```go
func MachineScopeInput() VirtualMachineScaleSetPacketCaptureMachineScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

---

##### `MaximumBytesPerPacketInput`<sup>Optional</sup> <a name="MaximumBytesPerPacketInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacketInput"></a>

```go
func MaximumBytesPerPacketInput() *f64
```

- *Type:* *f64

---

##### `MaximumBytesPerSessionInput`<sup>Optional</sup> <a name="MaximumBytesPerSessionInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSessionInput"></a>

```go
func MaximumBytesPerSessionInput() *f64
```

- *Type:* *f64

---

##### `MaximumCaptureDurationInSecondsInput`<sup>Optional</sup> <a name="MaximumCaptureDurationInSecondsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSecondsInput"></a>

```go
func MaximumCaptureDurationInSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkWatcherIdInput`<sup>Optional</sup> <a name="NetworkWatcherIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherIdInput"></a>

```go
func NetworkWatcherIdInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.storageLocationInput"></a>

```go
func StorageLocationInput() VirtualMachineScaleSetPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="VirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetIdInput"></a>

```go
func VirtualMachineScaleSetIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaximumBytesPerPacket`<sup>Required</sup> <a name="MaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerPacket"></a>

```go
func MaximumBytesPerPacket() *f64
```

- *Type:* *f64

---

##### `MaximumBytesPerSession`<sup>Required</sup> <a name="MaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumBytesPerSession"></a>

```go
func MaximumBytesPerSession() *f64
```

- *Type:* *f64

---

##### `MaximumCaptureDurationInSeconds`<sup>Required</sup> <a name="MaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.maximumCaptureDurationInSeconds"></a>

```go
func MaximumCaptureDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.networkWatcherId"></a>

```go
func NetworkWatcherId() *string
```

- *Type:* *string

---

##### `VirtualMachineScaleSetId`<sup>Required</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.virtualMachineScaleSetId"></a>

```go
func VirtualMachineScaleSetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCapture.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetPacketCaptureConfig <a name="VirtualMachineScaleSetPacketCaptureConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

&virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCaptureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkWatcherId: *string,
	StorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation,
	VirtualMachineScaleSetId: *string,
	Filter: interface{},
	Id: *string,
	MachineScope: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope,
	MaximumBytesPerPacket: *f64,
	MaximumBytesPerSession: *f64,
	MaximumCaptureDurationInSeconds: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#name VirtualMachineScaleSetPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.networkWatcherId">NetworkWatcherId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#network_watcher_id VirtualMachineScaleSetPacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.virtualMachineScaleSetId">VirtualMachineScaleSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#virtual_machine_scale_set_id VirtualMachineScaleSetPacketCapture#virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#id VirtualMachineScaleSetPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.machineScope">MachineScope</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | machine_scope block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerPacket">MaximumBytesPerPacket</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_packet VirtualMachineScaleSetPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerSession">MaximumBytesPerSession</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_session VirtualMachineScaleSetPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumCaptureDurationInSeconds">MaximumCaptureDurationInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_capture_duration_in_seconds VirtualMachineScaleSetPacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#name VirtualMachineScaleSetPacketCapture#name}.

---

##### `NetworkWatcherId`<sup>Required</sup> <a name="NetworkWatcherId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.networkWatcherId"></a>

```go
NetworkWatcherId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#network_watcher_id VirtualMachineScaleSetPacketCapture#network_watcher_id}.

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.storageLocation"></a>

```go
StorageLocation VirtualMachineScaleSetPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_location VirtualMachineScaleSetPacketCapture#storage_location}

---

##### `VirtualMachineScaleSetId`<sup>Required</sup> <a name="VirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.virtualMachineScaleSetId"></a>

```go
VirtualMachineScaleSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#virtual_machine_scale_set_id VirtualMachineScaleSetPacketCapture#virtual_machine_scale_set_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#filter VirtualMachineScaleSetPacketCapture#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#id VirtualMachineScaleSetPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MachineScope`<sup>Optional</sup> <a name="MachineScope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.machineScope"></a>

```go
MachineScope VirtualMachineScaleSetPacketCaptureMachineScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

machine_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#machine_scope VirtualMachineScaleSetPacketCapture#machine_scope}

---

##### `MaximumBytesPerPacket`<sup>Optional</sup> <a name="MaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerPacket"></a>

```go
MaximumBytesPerPacket *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_packet VirtualMachineScaleSetPacketCapture#maximum_bytes_per_packet}.

---

##### `MaximumBytesPerSession`<sup>Optional</sup> <a name="MaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumBytesPerSession"></a>

```go
MaximumBytesPerSession *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_bytes_per_session VirtualMachineScaleSetPacketCapture#maximum_bytes_per_session}.

---

##### `MaximumCaptureDurationInSeconds`<sup>Optional</sup> <a name="MaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.maximumCaptureDurationInSeconds"></a>

```go
MaximumCaptureDurationInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#maximum_capture_duration_in_seconds VirtualMachineScaleSetPacketCapture#maximum_capture_duration_in_seconds}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureConfig.property.timeouts"></a>

```go
Timeouts VirtualMachineScaleSetPacketCaptureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts">VirtualMachineScaleSetPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#timeouts VirtualMachineScaleSetPacketCapture#timeouts}

---

### VirtualMachineScaleSetPacketCaptureFilter <a name="VirtualMachineScaleSetPacketCaptureFilter" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

&virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCaptureFilter {
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
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#protocol VirtualMachineScaleSetPacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localIpAddress">LocalIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#local_ip_address VirtualMachineScaleSetPacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localPort">LocalPort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#local_port VirtualMachineScaleSetPacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remoteIpAddress">RemoteIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_ip_address VirtualMachineScaleSetPacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remotePort">RemotePort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_port VirtualMachineScaleSetPacketCapture#remote_port}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#protocol VirtualMachineScaleSetPacketCapture#protocol}.

---

##### `LocalIpAddress`<sup>Optional</sup> <a name="LocalIpAddress" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localIpAddress"></a>

```go
LocalIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#local_ip_address VirtualMachineScaleSetPacketCapture#local_ip_address}.

---

##### `LocalPort`<sup>Optional</sup> <a name="LocalPort" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.localPort"></a>

```go
LocalPort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#local_port VirtualMachineScaleSetPacketCapture#local_port}.

---

##### `RemoteIpAddress`<sup>Optional</sup> <a name="RemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remoteIpAddress"></a>

```go
RemoteIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_ip_address VirtualMachineScaleSetPacketCapture#remote_ip_address}.

---

##### `RemotePort`<sup>Optional</sup> <a name="RemotePort" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilter.property.remotePort"></a>

```go
RemotePort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#remote_port VirtualMachineScaleSetPacketCapture#remote_port}.

---

### VirtualMachineScaleSetPacketCaptureMachineScope <a name="VirtualMachineScaleSetPacketCaptureMachineScope" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

&virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCaptureMachineScope {
	ExcludeInstanceIds: *[]*string,
	IncludeInstanceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.excludeInstanceIds">ExcludeInstanceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#exclude_instance_ids VirtualMachineScaleSetPacketCapture#exclude_instance_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.includeInstanceIds">IncludeInstanceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#include_instance_ids VirtualMachineScaleSetPacketCapture#include_instance_ids}. |

---

##### `ExcludeInstanceIds`<sup>Optional</sup> <a name="ExcludeInstanceIds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.excludeInstanceIds"></a>

```go
ExcludeInstanceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#exclude_instance_ids VirtualMachineScaleSetPacketCapture#exclude_instance_ids}.

---

##### `IncludeInstanceIds`<sup>Optional</sup> <a name="IncludeInstanceIds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope.property.includeInstanceIds"></a>

```go
IncludeInstanceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#include_instance_ids VirtualMachineScaleSetPacketCapture#include_instance_ids}.

---

### VirtualMachineScaleSetPacketCaptureStorageLocation <a name="VirtualMachineScaleSetPacketCaptureStorageLocation" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

&virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCaptureStorageLocation {
	FilePath: *string,
	StorageAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.filePath">FilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#file_path VirtualMachineScaleSetPacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_account_id VirtualMachineScaleSetPacketCapture#storage_account_id}. |

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#file_path VirtualMachineScaleSetPacketCapture#file_path}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#storage_account_id VirtualMachineScaleSetPacketCapture#storage_account_id}.

---

### VirtualMachineScaleSetPacketCaptureTimeouts <a name="VirtualMachineScaleSetPacketCaptureTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

&virtualmachinescalesetpacketcapture.VirtualMachineScaleSetPacketCaptureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#create VirtualMachineScaleSetPacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#delete VirtualMachineScaleSetPacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#read VirtualMachineScaleSetPacketCapture#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#create VirtualMachineScaleSetPacketCapture#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#delete VirtualMachineScaleSetPacketCapture#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/virtual_machine_scale_set_packet_capture#read VirtualMachineScaleSetPacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetPacketCaptureFilterList <a name="VirtualMachineScaleSetPacketCaptureFilterList" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.NewVirtualMachineScaleSetPacketCaptureFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineScaleSetPacketCaptureFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.get"></a>

```go
func Get(index *f64) VirtualMachineScaleSetPacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetPacketCaptureFilterOutputReference <a name="VirtualMachineScaleSetPacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.NewVirtualMachineScaleSetPacketCaptureFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineScaleSetPacketCaptureFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalIpAddress">ResetLocalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalPort">ResetLocalPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemoteIpAddress">ResetRemoteIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemotePort">ResetRemotePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalIpAddress` <a name="ResetLocalIpAddress" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```go
func ResetLocalIpAddress()
```

##### `ResetLocalPort` <a name="ResetLocalPort" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetLocalPort"></a>

```go
func ResetLocalPort()
```

##### `ResetRemoteIpAddress` <a name="ResetRemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```go
func ResetRemoteIpAddress()
```

##### `ResetRemotePort` <a name="ResetRemotePort" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.resetRemotePort"></a>

```go
func ResetRemotePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddressInput">LocalIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPortInput">LocalPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddressInput">RemoteIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePortInput">RemotePortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddress">LocalIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPort">LocalPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddress">RemoteIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePort">RemotePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalIpAddressInput`<sup>Optional</sup> <a name="LocalIpAddressInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```go
func LocalIpAddressInput() *string
```

- *Type:* *string

---

##### `LocalPortInput`<sup>Optional</sup> <a name="LocalPortInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPortInput"></a>

```go
func LocalPortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RemoteIpAddressInput`<sup>Optional</sup> <a name="RemoteIpAddressInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```go
func RemoteIpAddressInput() *string
```

- *Type:* *string

---

##### `RemotePortInput`<sup>Optional</sup> <a name="RemotePortInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePortInput"></a>

```go
func RemotePortInput() *string
```

- *Type:* *string

---

##### `LocalIpAddress`<sup>Required</sup> <a name="LocalIpAddress" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localIpAddress"></a>

```go
func LocalIpAddress() *string
```

- *Type:* *string

---

##### `LocalPort`<sup>Required</sup> <a name="LocalPort" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.localPort"></a>

```go
func LocalPort() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RemoteIpAddress`<sup>Required</sup> <a name="RemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```go
func RemoteIpAddress() *string
```

- *Type:* *string

---

##### `RemotePort`<sup>Required</sup> <a name="RemotePort" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.remotePort"></a>

```go
func RemotePort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference <a name="VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.NewVirtualMachineScaleSetPacketCaptureMachineScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetExcludeInstanceIds">ResetExcludeInstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetIncludeInstanceIds">ResetIncludeInstanceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeInstanceIds` <a name="ResetExcludeInstanceIds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetExcludeInstanceIds"></a>

```go
func ResetExcludeInstanceIds()
```

##### `ResetIncludeInstanceIds` <a name="ResetIncludeInstanceIds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.resetIncludeInstanceIds"></a>

```go
func ResetIncludeInstanceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIdsInput">ExcludeInstanceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIdsInput">IncludeInstanceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIds">ExcludeInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIds">IncludeInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInstanceIdsInput`<sup>Optional</sup> <a name="ExcludeInstanceIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIdsInput"></a>

```go
func ExcludeInstanceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInstanceIdsInput`<sup>Optional</sup> <a name="IncludeInstanceIdsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIdsInput"></a>

```go
func IncludeInstanceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeInstanceIds`<sup>Required</sup> <a name="ExcludeInstanceIds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.excludeInstanceIds"></a>

```go
func ExcludeInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInstanceIds`<sup>Required</sup> <a name="IncludeInstanceIds" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.includeInstanceIds"></a>

```go
func IncludeInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetPacketCaptureMachineScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureMachineScope">VirtualMachineScaleSetPacketCaptureMachineScope</a>

---


### VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference <a name="VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.NewVirtualMachineScaleSetPacketCaptureStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storagePath">StoragePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StoragePath`<sup>Required</sup> <a name="StoragePath" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```go
func StoragePath() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineScaleSetPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureStorageLocation">VirtualMachineScaleSetPacketCaptureStorageLocation</a>

---


### VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference <a name="VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachinescalesetpacketcapture"

virtualmachinescalesetpacketcapture.NewVirtualMachineScaleSetPacketCaptureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetPacketCapture.VirtualMachineScaleSetPacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



