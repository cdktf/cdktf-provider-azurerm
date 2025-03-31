# `managementGroupTemplateDeployment` Submodule <a name="`managementGroupTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupTemplateDeployment <a name="ManagementGroupTemplateDeployment" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment azurerm_management_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

managementgrouptemplatedeployment.NewManagementGroupTemplateDeployment(scope Construct, id *string, config ManagementGroupTemplateDeploymentConfig) ManagementGroupTemplateDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig">ManagementGroupTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig">ManagementGroupTemplateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetDebugLevel">ResetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetParametersContent">ResetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateContent">ResetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateSpecVersionId">ResetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.putTimeouts"></a>

```go
func PutTimeouts(value ManagementGroupTemplateDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts">ManagementGroupTemplateDeploymentTimeouts</a>

---

##### `ResetDebugLevel` <a name="ResetDebugLevel" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetDebugLevel"></a>

```go
func ResetDebugLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetParametersContent` <a name="ResetParametersContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetParametersContent"></a>

```go
func ResetParametersContent()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateContent` <a name="ResetTemplateContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateContent"></a>

```go
func ResetTemplateContent()
```

##### `ResetTemplateSpecVersionId` <a name="ResetTemplateSpecVersionId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTemplateSpecVersionId"></a>

```go
func ResetTemplateSpecVersionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementGroupTemplateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

managementgrouptemplatedeployment.ManagementGroupTemplateDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

managementgrouptemplatedeployment.ManagementGroupTemplateDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

managementgrouptemplatedeployment.ManagementGroupTemplateDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

managementgrouptemplatedeployment.ManagementGroupTemplateDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagementGroupTemplateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagementGroupTemplateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagementGroupTemplateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupTemplateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.outputContent">OutputContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference">ManagementGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevelInput">DebugLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContentInput">ParametersContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContentInput">TemplateContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionIdInput">TemplateSpecVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevel">DebugLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupId">ManagementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContent">ParametersContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContent">TemplateContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OutputContent`<sup>Required</sup> <a name="OutputContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.outputContent"></a>

```go
func OutputContent() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeouts"></a>

```go
func Timeouts() ManagementGroupTemplateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference">ManagementGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `DebugLevelInput`<sup>Optional</sup> <a name="DebugLevelInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevelInput"></a>

```go
func DebugLevelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupIdInput"></a>

```go
func ManagementGroupIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersContentInput`<sup>Optional</sup> <a name="ParametersContentInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContentInput"></a>

```go
func ParametersContentInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateContentInput`<sup>Optional</sup> <a name="TemplateContentInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContentInput"></a>

```go
func TemplateContentInput() *string
```

- *Type:* *string

---

##### `TemplateSpecVersionIdInput`<sup>Optional</sup> <a name="TemplateSpecVersionIdInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionIdInput"></a>

```go
func TemplateSpecVersionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DebugLevel`<sup>Required</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.debugLevel"></a>

```go
func DebugLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.managementGroupId"></a>

```go
func ManagementGroupId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParametersContent`<sup>Required</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.parametersContent"></a>

```go
func ParametersContent() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateContent"></a>

```go
func TemplateContent() *string
```

- *Type:* *string

---

##### `TemplateSpecVersionId`<sup>Required</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.templateSpecVersionId"></a>

```go
func TemplateSpecVersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupTemplateDeploymentConfig <a name="ManagementGroupTemplateDeploymentConfig" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

&managementgrouptemplatedeployment.ManagementGroupTemplateDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagementGroupId: *string,
	Name: *string,
	DebugLevel: *string,
	Id: *string,
	ParametersContent: *string,
	Tags: *map[string]*string,
	TemplateContent: *string,
	TemplateSpecVersionId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#location ManagementGroupTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#management_group_id ManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#name ManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.debugLevel">DebugLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#debug_level ManagementGroupTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#id ManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.parametersContent">ParametersContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#parameters_content ManagementGroupTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#tags ManagementGroupTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateContent">TemplateContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#template_content ManagementGroupTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#template_spec_version_id ManagementGroupTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts">ManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#location ManagementGroupTemplateDeployment#location}.

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.managementGroupId"></a>

```go
ManagementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#management_group_id ManagementGroupTemplateDeployment#management_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#name ManagementGroupTemplateDeployment#name}.

---

##### `DebugLevel`<sup>Optional</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.debugLevel"></a>

```go
DebugLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#debug_level ManagementGroupTemplateDeployment#debug_level}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#id ManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParametersContent`<sup>Optional</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.parametersContent"></a>

```go
ParametersContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#parameters_content ManagementGroupTemplateDeployment#parameters_content}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#tags ManagementGroupTemplateDeployment#tags}.

---

##### `TemplateContent`<sup>Optional</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateContent"></a>

```go
TemplateContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#template_content ManagementGroupTemplateDeployment#template_content}.

---

##### `TemplateSpecVersionId`<sup>Optional</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```go
TemplateSpecVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#template_spec_version_id ManagementGroupTemplateDeployment#template_spec_version_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentConfig.property.timeouts"></a>

```go
Timeouts ManagementGroupTemplateDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts">ManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#timeouts ManagementGroupTemplateDeployment#timeouts}

---

### ManagementGroupTemplateDeploymentTimeouts <a name="ManagementGroupTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

&managementgrouptemplatedeployment.ManagementGroupTemplateDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#create ManagementGroupTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#delete ManagementGroupTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#read ManagementGroupTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#update ManagementGroupTemplateDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#create ManagementGroupTemplateDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#delete ManagementGroupTemplateDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#read ManagementGroupTemplateDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/management_group_template_deployment#update ManagementGroupTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupTemplateDeploymentTimeoutsOutputReference <a name="ManagementGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managementgrouptemplatedeployment"

managementgrouptemplatedeployment.NewManagementGroupTemplateDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagementGroupTemplateDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupTemplateDeployment.ManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



