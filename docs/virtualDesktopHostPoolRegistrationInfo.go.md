# `virtualDesktopHostPoolRegistrationInfo` Submodule <a name="`virtualDesktopHostPoolRegistrationInfo` Submodule" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopHostPoolRegistrationInfo <a name="VirtualDesktopHostPoolRegistrationInfo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info azurerm_virtual_desktop_host_pool_registration_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

virtualdesktophostpoolregistrationinfo.NewVirtualDesktopHostPoolRegistrationInfo(scope Construct, id *string, config VirtualDesktopHostPoolRegistrationInfoConfig) VirtualDesktopHostPoolRegistrationInfo
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig">VirtualDesktopHostPoolRegistrationInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig">VirtualDesktopHostPoolRegistrationInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts"></a>

```go
func PutTimeouts(value VirtualDesktopHostPoolRegistrationInfoTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopHostPoolRegistrationInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

virtualdesktophostpoolregistrationinfo.VirtualDesktopHostPoolRegistrationInfo_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

virtualdesktophostpoolregistrationinfo.VirtualDesktopHostPoolRegistrationInfo_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

virtualdesktophostpoolregistrationinfo.VirtualDesktopHostPoolRegistrationInfo_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

virtualdesktophostpoolregistrationinfo.VirtualDesktopHostPoolRegistrationInfo_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualDesktopHostPoolRegistrationInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualDesktopHostPoolRegistrationInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualDesktopHostPoolRegistrationInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopHostPoolRegistrationInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput">ExpirationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput">HostpoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId">HostpoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts"></a>

```go
func Timeouts() VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput"></a>

```go
func ExpirationDateInput() *string
```

- *Type:* *string

---

##### `HostpoolIdInput`<sup>Optional</sup> <a name="HostpoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput"></a>

```go
func HostpoolIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId"></a>

```go
func HostpoolId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopHostPoolRegistrationInfoConfig <a name="VirtualDesktopHostPoolRegistrationInfoConfig" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

&virtualdesktophostpoolregistrationinfo.VirtualDesktopHostPoolRegistrationInfoConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExpirationDate: *string,
	HostpoolId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId">HostpoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate"></a>

```go
ExpirationDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}.

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId"></a>

```go
HostpoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts"></a>

```go
Timeouts VirtualDesktopHostPoolRegistrationInfoTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#timeouts VirtualDesktopHostPoolRegistrationInfo#timeouts}

---

### VirtualDesktopHostPoolRegistrationInfoTimeouts <a name="VirtualDesktopHostPoolRegistrationInfoTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

&virtualdesktophostpoolregistrationinfo.VirtualDesktopHostPoolRegistrationInfoTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference <a name="VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/virtualdesktophostpoolregistrationinfo"

virtualdesktophostpoolregistrationinfo.NewVirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



