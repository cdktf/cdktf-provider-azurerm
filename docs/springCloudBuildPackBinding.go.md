# `springCloudBuildPackBinding` Submodule <a name="`springCloudBuildPackBinding` Submodule" id="@cdktf/provider-azurerm.springCloudBuildPackBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudBuildPackBinding <a name="SpringCloudBuildPackBinding" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding azurerm_spring_cloud_build_pack_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.NewSpringCloudBuildPackBinding(scope Construct, id *string, config SpringCloudBuildPackBindingConfig) SpringCloudBuildPackBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig">SpringCloudBuildPackBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig">SpringCloudBuildPackBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch">PutLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetBindingType">ResetBindingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetLaunch">ResetLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLaunch` <a name="PutLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch"></a>

```go
func PutLaunch(value SpringCloudBuildPackBindingLaunch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putLaunch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudBuildPackBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>

---

##### `ResetBindingType` <a name="ResetBindingType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetBindingType"></a>

```go
func ResetBindingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLaunch` <a name="ResetLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetLaunch"></a>

```go
func ResetLaunch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudBuildPackBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.SpringCloudBuildPackBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.SpringCloudBuildPackBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.SpringCloudBuildPackBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.SpringCloudBuildPackBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudBuildPackBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudBuildPackBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudBuildPackBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudBuildPackBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launch">Launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference">SpringCloudBuildPackBindingLaunchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference">SpringCloudBuildPackBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingTypeInput">BindingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launchInput">LaunchInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderIdInput">SpringCloudBuilderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingType">BindingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderId">SpringCloudBuilderId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Launch`<sup>Required</sup> <a name="Launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launch"></a>

```go
func Launch() SpringCloudBuildPackBindingLaunchOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference">SpringCloudBuildPackBindingLaunchOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeouts"></a>

```go
func Timeouts() SpringCloudBuildPackBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference">SpringCloudBuildPackBindingTimeoutsOutputReference</a>

---

##### `BindingTypeInput`<sup>Optional</sup> <a name="BindingTypeInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingTypeInput"></a>

```go
func BindingTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LaunchInput`<sup>Optional</sup> <a name="LaunchInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.launchInput"></a>

```go
func LaunchInput() SpringCloudBuildPackBindingLaunch
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpringCloudBuilderIdInput`<sup>Optional</sup> <a name="SpringCloudBuilderIdInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderIdInput"></a>

```go
func SpringCloudBuilderIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BindingType`<sup>Required</sup> <a name="BindingType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.bindingType"></a>

```go
func BindingType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpringCloudBuilderId`<sup>Required</sup> <a name="SpringCloudBuilderId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.springCloudBuilderId"></a>

```go
func SpringCloudBuilderId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudBuildPackBindingConfig <a name="SpringCloudBuildPackBindingConfig" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

&springcloudbuildpackbinding.SpringCloudBuildPackBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SpringCloudBuilderId: *string,
	BindingType: *string,
	Id: *string,
	Launch: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.springCloudBuilderId">SpringCloudBuilderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.bindingType">BindingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.launch">Launch</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | launch block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#name SpringCloudBuildPackBinding#name}.

---

##### `SpringCloudBuilderId`<sup>Required</sup> <a name="SpringCloudBuilderId" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.springCloudBuilderId"></a>

```go
SpringCloudBuilderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#spring_cloud_builder_id SpringCloudBuildPackBinding#spring_cloud_builder_id}.

---

##### `BindingType`<sup>Optional</sup> <a name="BindingType" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.bindingType"></a>

```go
BindingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#binding_type SpringCloudBuildPackBinding#binding_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#id SpringCloudBuildPackBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Launch`<sup>Optional</sup> <a name="Launch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.launch"></a>

```go
Launch SpringCloudBuildPackBindingLaunch
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

launch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#launch SpringCloudBuildPackBinding#launch}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingConfig.property.timeouts"></a>

```go
Timeouts SpringCloudBuildPackBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts">SpringCloudBuildPackBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#timeouts SpringCloudBuildPackBinding#timeouts}

---

### SpringCloudBuildPackBindingLaunch <a name="SpringCloudBuildPackBindingLaunch" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

&springcloudbuildpackbinding.SpringCloudBuildPackBindingLaunch {
	Properties: *map[string]*string,
	Secrets: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#properties SpringCloudBuildPackBinding#properties}.

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch.property.secrets"></a>

```go
Secrets *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#secrets SpringCloudBuildPackBinding#secrets}.

---

### SpringCloudBuildPackBindingTimeouts <a name="SpringCloudBuildPackBindingTimeouts" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

&springcloudbuildpackbinding.SpringCloudBuildPackBindingTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#create SpringCloudBuildPackBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#delete SpringCloudBuildPackBinding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#read SpringCloudBuildPackBinding#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/spring_cloud_build_pack_binding#update SpringCloudBuildPackBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudBuildPackBindingLaunchOutputReference <a name="SpringCloudBuildPackBindingLaunchOutputReference" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.NewSpringCloudBuildPackBindingLaunchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudBuildPackBindingLaunchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.resetSecrets"></a>

```go
func ResetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secretsInput">SecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secretsInput"></a>

```go
func SecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.secrets"></a>

```go
func Secrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunchOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudBuildPackBindingLaunch
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingLaunch">SpringCloudBuildPackBindingLaunch</a>

---


### SpringCloudBuildPackBindingTimeoutsOutputReference <a name="SpringCloudBuildPackBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudbuildpackbinding"

springcloudbuildpackbinding.NewSpringCloudBuildPackBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudBuildPackBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudBuildPackBinding.SpringCloudBuildPackBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



