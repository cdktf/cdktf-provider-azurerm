# `devCenterProjectPool` Submodule <a name="`devCenterProjectPool` Submodule" id="@cdktf/provider-azurerm.devCenterProjectPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectPool <a name="DevCenterProjectPool" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

devcenterprojectpool.NewDevCenterProjectPool(scope Construct, id *string, config DevCenterProjectPoolConfig) DevCenterProjectPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig">DevCenterProjectPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig">DevCenterProjectPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes">ResetStopOnDisconnectGracePeriodMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts"></a>

```go
func PutTimeouts(value DevCenterProjectPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId"></a>

```go
func ResetId()
```

##### `ResetStopOnDisconnectGracePeriodMinutes` <a name="ResetStopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes"></a>

```go
func ResetStopOnDisconnectGracePeriodMinutes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

devcenterprojectpool.DevCenterProjectPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

devcenterprojectpool.DevCenterProjectPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

devcenterprojectpool.DevCenterProjectPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

devcenterprojectpool.DevCenterProjectPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevCenterProjectPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevCenterProjectPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput">DevBoxDefinitionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput">DevCenterAttachedNetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput">DevCenterProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput">LocalAdministratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput">StopOnDisconnectGracePeriodMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName">DevBoxDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName">DevCenterAttachedNetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled">LocalAdministratorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes">StopOnDisconnectGracePeriodMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts"></a>

```go
func Timeouts() DevCenterProjectPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a>

---

##### `DevBoxDefinitionNameInput`<sup>Optional</sup> <a name="DevBoxDefinitionNameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput"></a>

```go
func DevBoxDefinitionNameInput() *string
```

- *Type:* *string

---

##### `DevCenterAttachedNetworkNameInput`<sup>Optional</sup> <a name="DevCenterAttachedNetworkNameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput"></a>

```go
func DevCenterAttachedNetworkNameInput() *string
```

- *Type:* *string

---

##### `DevCenterProjectIdInput`<sup>Optional</sup> <a name="DevCenterProjectIdInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput"></a>

```go
func DevCenterProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalAdministratorEnabledInput`<sup>Optional</sup> <a name="LocalAdministratorEnabledInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput"></a>

```go
func LocalAdministratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StopOnDisconnectGracePeriodMinutesInput`<sup>Optional</sup> <a name="StopOnDisconnectGracePeriodMinutesInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput"></a>

```go
func StopOnDisconnectGracePeriodMinutesInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DevBoxDefinitionName`<sup>Required</sup> <a name="DevBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName"></a>

```go
func DevBoxDefinitionName() *string
```

- *Type:* *string

---

##### `DevCenterAttachedNetworkName`<sup>Required</sup> <a name="DevCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName"></a>

```go
func DevCenterAttachedNetworkName() *string
```

- *Type:* *string

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId"></a>

```go
func DevCenterProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAdministratorEnabled`<sup>Required</sup> <a name="LocalAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled"></a>

```go
func LocalAdministratorEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StopOnDisconnectGracePeriodMinutes`<sup>Required</sup> <a name="StopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes"></a>

```go
func StopOnDisconnectGracePeriodMinutes() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectPoolConfig <a name="DevCenterProjectPoolConfig" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

&devcenterprojectpool.DevCenterProjectPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DevBoxDefinitionName: *string,
	DevCenterAttachedNetworkName: *string,
	DevCenterProjectId: *string,
	LocalAdministratorEnabled: interface{},
	Location: *string,
	Name: *string,
	Id: *string,
	StopOnDisconnectGracePeriodMinutes: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName">DevBoxDefinitionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName">DevCenterAttachedNetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled">LocalAdministratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes">StopOnDisconnectGracePeriodMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DevBoxDefinitionName`<sup>Required</sup> <a name="DevBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName"></a>

```go
DevBoxDefinitionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `DevCenterAttachedNetworkName`<sup>Required</sup> <a name="DevCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName"></a>

```go
DevCenterAttachedNetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId"></a>

```go
DevCenterProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `LocalAdministratorEnabled`<sup>Required</sup> <a name="LocalAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled"></a>

```go
LocalAdministratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StopOnDisconnectGracePeriodMinutes`<sup>Optional</sup> <a name="StopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes"></a>

```go
StopOnDisconnectGracePeriodMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts"></a>

```go
Timeouts DevCenterProjectPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

### DevCenterProjectPoolTimeouts <a name="DevCenterProjectPoolTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

&devcenterprojectpool.DevCenterProjectPoolTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectPoolTimeoutsOutputReference <a name="DevCenterProjectPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/devcenterprojectpool"

devcenterprojectpool.NewDevCenterProjectPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevCenterProjectPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



