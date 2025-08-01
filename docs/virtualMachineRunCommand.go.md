# `virtualMachineRunCommand` Submodule <a name="`virtualMachineRunCommand` Submodule" id="@cdktf/provider-azurerm.virtualMachineRunCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRunCommand <a name="VirtualMachineRunCommand" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command azurerm_virtual_machine_run_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommand(scope Construct, id *string, config VirtualMachineRunCommandConfig) VirtualMachineRunCommand
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig">VirtualMachineRunCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig">VirtualMachineRunCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity">PutErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity">PutOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter">PutProtectedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity">ResetErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri">ResetErrorBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity">ResetOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri">ResetOutputBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter">ResetProtectedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword">ResetRunAsPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser">ResetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorBlobManagedIdentity` <a name="PutErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity"></a>

```go
func PutErrorBlobManagedIdentity(value VirtualMachineRunCommandErrorBlobManagedIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `PutOutputBlobManagedIdentity` <a name="PutOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity"></a>

```go
func PutOutputBlobManagedIdentity(value VirtualMachineRunCommandOutputBlobManagedIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProtectedParameter` <a name="PutProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter"></a>

```go
func PutProtectedParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource"></a>

```go
func PutSource(value VirtualMachineRunCommandSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachineRunCommandTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

---

##### `ResetErrorBlobManagedIdentity` <a name="ResetErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity"></a>

```go
func ResetErrorBlobManagedIdentity()
```

##### `ResetErrorBlobUri` <a name="ResetErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri"></a>

```go
func ResetErrorBlobUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId"></a>

```go
func ResetId()
```

##### `ResetOutputBlobManagedIdentity` <a name="ResetOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity"></a>

```go
func ResetOutputBlobManagedIdentity()
```

##### `ResetOutputBlobUri` <a name="ResetOutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri"></a>

```go
func ResetOutputBlobUri()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetProtectedParameter` <a name="ResetProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter"></a>

```go
func ResetProtectedParameter()
```

##### `ResetRunAsPassword` <a name="ResetRunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword"></a>

```go
func ResetRunAsPassword()
```

##### `ResetRunAsUser` <a name="ResetRunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser"></a>

```go
func ResetRunAsUser()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.VirtualMachineRunCommand_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.VirtualMachineRunCommand_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.VirtualMachineRunCommand_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.VirtualMachineRunCommand_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachineRunCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachineRunCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRunCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity">ErrorBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView">InstanceView</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity">OutputBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter">ProtectedParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput">ErrorBlobManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput">ErrorBlobUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput">OutputBlobManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput">OutputBlobUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput">ProtectedParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput">RunAsPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput">RunAsUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri">ErrorBlobUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri">OutputBlobUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword">RunAsPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser">RunAsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ErrorBlobManagedIdentity`<sup>Required</sup> <a name="ErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity"></a>

```go
func ErrorBlobManagedIdentity() VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a>

---

##### `InstanceView`<sup>Required</sup> <a name="InstanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView"></a>

```go
func InstanceView() VirtualMachineRunCommandInstanceViewList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a>

---

##### `OutputBlobManagedIdentity`<sup>Required</sup> <a name="OutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity"></a>

```go
func OutputBlobManagedIdentity() VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter"></a>

```go
func Parameter() VirtualMachineRunCommandParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a>

---

##### `ProtectedParameter`<sup>Required</sup> <a name="ProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter"></a>

```go
func ProtectedParameter() VirtualMachineRunCommandProtectedParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source"></a>

```go
func Source() VirtualMachineRunCommandSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts"></a>

```go
func Timeouts() VirtualMachineRunCommandTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a>

---

##### `ErrorBlobManagedIdentityInput`<sup>Optional</sup> <a name="ErrorBlobManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput"></a>

```go
func ErrorBlobManagedIdentityInput() VirtualMachineRunCommandErrorBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `ErrorBlobUriInput`<sup>Optional</sup> <a name="ErrorBlobUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput"></a>

```go
func ErrorBlobUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputBlobManagedIdentityInput`<sup>Optional</sup> <a name="OutputBlobManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput"></a>

```go
func OutputBlobManagedIdentityInput() VirtualMachineRunCommandOutputBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `OutputBlobUriInput`<sup>Optional</sup> <a name="OutputBlobUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput"></a>

```go
func OutputBlobUriInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectedParameterInput`<sup>Optional</sup> <a name="ProtectedParameterInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput"></a>

```go
func ProtectedParameterInput() interface{}
```

- *Type:* interface{}

---

##### `RunAsPasswordInput`<sup>Optional</sup> <a name="RunAsPasswordInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput"></a>

```go
func RunAsPasswordInput() *string
```

- *Type:* *string

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput"></a>

```go
func RunAsUserInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput"></a>

```go
func SourceInput() VirtualMachineRunCommandSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `ErrorBlobUri`<sup>Required</sup> <a name="ErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri"></a>

```go
func ErrorBlobUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputBlobUri`<sup>Required</sup> <a name="OutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri"></a>

```go
func OutputBlobUri() *string
```

- *Type:* *string

---

##### `RunAsPassword`<sup>Required</sup> <a name="RunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword"></a>

```go
func RunAsPassword() *string
```

- *Type:* *string

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser"></a>

```go
func RunAsUser() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRunCommandConfig <a name="VirtualMachineRunCommandConfig" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Source: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineRunCommand.VirtualMachineRunCommandSource,
	VirtualMachineId: *string,
	ErrorBlobManagedIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity,
	ErrorBlobUri: *string,
	Id: *string,
	OutputBlobManagedIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity,
	OutputBlobUri: *string,
	Parameter: interface{},
	ProtectedParameter: interface{},
	RunAsPassword: *string,
	RunAsUser: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity">ErrorBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | error_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri">ErrorBlobUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity">OutputBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | output_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri">OutputBlobUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter">ProtectedParameter</a></code> | <code>interface{}</code> | protected_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword">RunAsPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser">RunAsUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source"></a>

```go
Source VirtualMachineRunCommandSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#source VirtualMachineRunCommand#source}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}.

---

##### `ErrorBlobManagedIdentity`<sup>Optional</sup> <a name="ErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity"></a>

```go
ErrorBlobManagedIdentity VirtualMachineRunCommandErrorBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

error_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#error_blob_managed_identity VirtualMachineRunCommand#error_blob_managed_identity}

---

##### `ErrorBlobUri`<sup>Optional</sup> <a name="ErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri"></a>

```go
ErrorBlobUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OutputBlobManagedIdentity`<sup>Optional</sup> <a name="OutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity"></a>

```go
OutputBlobManagedIdentity VirtualMachineRunCommandOutputBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

output_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#output_blob_managed_identity VirtualMachineRunCommand#output_blob_managed_identity}

---

##### `OutputBlobUri`<sup>Optional</sup> <a name="OutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri"></a>

```go
OutputBlobUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#parameter VirtualMachineRunCommand#parameter}

---

##### `ProtectedParameter`<sup>Optional</sup> <a name="ProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter"></a>

```go
ProtectedParameter interface{}
```

- *Type:* interface{}

protected_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#protected_parameter VirtualMachineRunCommand#protected_parameter}

---

##### `RunAsPassword`<sup>Optional</sup> <a name="RunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword"></a>

```go
RunAsPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}.

---

##### `RunAsUser`<sup>Optional</sup> <a name="RunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser"></a>

```go
RunAsUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts"></a>

```go
Timeouts VirtualMachineRunCommandTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#timeouts VirtualMachineRunCommand#timeouts}

---

### VirtualMachineRunCommandErrorBlobManagedIdentity <a name="VirtualMachineRunCommandErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandErrorBlobManagedIdentity {
	ClientId: *string,
	ObjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandInstanceView <a name="VirtualMachineRunCommandInstanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandInstanceView {

}
```


### VirtualMachineRunCommandOutputBlobManagedIdentity <a name="VirtualMachineRunCommandOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandOutputBlobManagedIdentity {
	ClientId: *string,
	ObjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandParameter <a name="VirtualMachineRunCommandParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandParameter {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandProtectedParameter <a name="VirtualMachineRunCommandProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandProtectedParameter {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandSource <a name="VirtualMachineRunCommandSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandSource {
	CommandId: *string,
	Script: *string,
	ScriptUri: *string,
	ScriptUriManagedIdentity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId">CommandId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script">Script</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri">ScriptUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity">ScriptUriManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | script_uri_managed_identity block. |

---

##### `CommandId`<sup>Optional</sup> <a name="CommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId"></a>

```go
CommandId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script"></a>

```go
Script *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}.

---

##### `ScriptUri`<sup>Optional</sup> <a name="ScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri"></a>

```go
ScriptUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}.

---

##### `ScriptUriManagedIdentity`<sup>Optional</sup> <a name="ScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity"></a>

```go
ScriptUriManagedIdentity VirtualMachineRunCommandSourceScriptUriManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

script_uri_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#script_uri_managed_identity VirtualMachineRunCommand#script_uri_managed_identity}

---

### VirtualMachineRunCommandSourceScriptUriManagedIdentity <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity {
	ClientId: *string,
	ObjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandTimeouts <a name="VirtualMachineRunCommandTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

&virtualmachineruncommand.VirtualMachineRunCommandTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandErrorBlobManagedIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId"></a>

```go
func ResetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineRunCommandErrorBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---


### VirtualMachineRunCommandInstanceViewList <a name="VirtualMachineRunCommandInstanceViewList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandInstanceViewList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineRunCommandInstanceViewList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get"></a>

```go
func Get(index *f64) VirtualMachineRunCommandInstanceViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VirtualMachineRunCommandInstanceViewOutputReference <a name="VirtualMachineRunCommandInstanceViewOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandInstanceViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineRunCommandInstanceViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage">ExecutionMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState">ExecutionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode">ExitCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output">Output</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ExecutionMessage`<sup>Required</sup> <a name="ExecutionMessage" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage"></a>

```go
func ExecutionMessage() *string
```

- *Type:* *string

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState"></a>

```go
func ExecutionState() *string
```

- *Type:* *string

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode"></a>

```go
func ExitCode() *f64
```

- *Type:* *f64

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output"></a>

```go
func Output() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineRunCommandInstanceView
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a>

---


### VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandOutputBlobManagedIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId"></a>

```go
func ResetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineRunCommandOutputBlobManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---


### VirtualMachineRunCommandParameterList <a name="VirtualMachineRunCommandParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineRunCommandParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get"></a>

```go
func Get(index *f64) VirtualMachineRunCommandParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineRunCommandParameterOutputReference <a name="VirtualMachineRunCommandParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineRunCommandParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineRunCommandProtectedParameterList <a name="VirtualMachineRunCommandProtectedParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandProtectedParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualMachineRunCommandProtectedParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get"></a>

```go
func Get(index *f64) VirtualMachineRunCommandProtectedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineRunCommandProtectedParameterOutputReference <a name="VirtualMachineRunCommandProtectedParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandProtectedParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualMachineRunCommandProtectedParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualMachineRunCommandSourceOutputReference <a name="VirtualMachineRunCommandSourceOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineRunCommandSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity">PutScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId">ResetCommandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri">ResetScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity">ResetScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScriptUriManagedIdentity` <a name="PutScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity"></a>

```go
func PutScriptUriManagedIdentity(value VirtualMachineRunCommandSourceScriptUriManagedIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `ResetCommandId` <a name="ResetCommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId"></a>

```go
func ResetCommandId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript"></a>

```go
func ResetScript()
```

##### `ResetScriptUri` <a name="ResetScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri"></a>

```go
func ResetScriptUri()
```

##### `ResetScriptUriManagedIdentity` <a name="ResetScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity"></a>

```go
func ResetScriptUriManagedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity">ScriptUriManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput">CommandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput">ScriptUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput">ScriptUriManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId">CommandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri">ScriptUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptUriManagedIdentity`<sup>Required</sup> <a name="ScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity"></a>

```go
func ScriptUriManagedIdentity() VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a>

---

##### `CommandIdInput`<sup>Optional</sup> <a name="CommandIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput"></a>

```go
func CommandIdInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `ScriptUriInput`<sup>Optional</sup> <a name="ScriptUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput"></a>

```go
func ScriptUriInput() *string
```

- *Type:* *string

---

##### `ScriptUriManagedIdentityInput`<sup>Optional</sup> <a name="ScriptUriManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput"></a>

```go
func ScriptUriManagedIdentityInput() VirtualMachineRunCommandSourceScriptUriManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `CommandId`<sup>Required</sup> <a name="CommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId"></a>

```go
func CommandId() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `ScriptUri`<sup>Required</sup> <a name="ScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri"></a>

```go
func ScriptUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineRunCommandSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---


### VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId"></a>

```go
func ResetObjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() VirtualMachineRunCommandSourceScriptUriManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---


### VirtualMachineRunCommandTimeoutsOutputReference <a name="VirtualMachineRunCommandTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineruncommand"

virtualmachineruncommand.NewVirtualMachineRunCommandTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineRunCommandTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



