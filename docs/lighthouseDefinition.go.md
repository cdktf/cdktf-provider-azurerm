# `lighthouseDefinition` Submodule <a name="`lighthouseDefinition` Submodule" id="@cdktf/provider-azurerm.lighthouseDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LighthouseDefinition <a name="LighthouseDefinition" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition azurerm_lighthouse_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinition(scope Construct, id *string, config LighthouseDefinitionConfig) LighthouseDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig">LighthouseDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig">LighthouseDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization">PutEligibleAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetEligibleAuthorization">ResetEligibleAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetLighthouseDefinitionId">ResetLighthouseDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization"></a>

```go
func PutAuthorization(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEligibleAuthorization` <a name="PutEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization"></a>

```go
func PutEligibleAuthorization(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlan` <a name="PutPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan"></a>

```go
func PutPlan(value LighthouseDefinitionPlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts"></a>

```go
func PutTimeouts(value LighthouseDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEligibleAuthorization` <a name="ResetEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetEligibleAuthorization"></a>

```go
func ResetEligibleAuthorization()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetLighthouseDefinitionId` <a name="ResetLighthouseDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetLighthouseDefinitionId"></a>

```go
func ResetLighthouseDefinitionId()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.LighthouseDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.LighthouseDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.LighthouseDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.LighthouseDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LighthouseDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LighthouseDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LighthouseDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList">LighthouseDefinitionAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorization">EligibleAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList">LighthouseDefinitionEligibleAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference">LighthouseDefinitionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference">LighthouseDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorizationInput">AuthorizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorizationInput">EligibleAuthorizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionIdInput">LighthouseDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantIdInput">ManagingTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.planInput">PlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionId">LighthouseDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantId">ManagingTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorization"></a>

```go
func Authorization() LighthouseDefinitionAuthorizationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList">LighthouseDefinitionAuthorizationList</a>

---

##### `EligibleAuthorization`<sup>Required</sup> <a name="EligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorization"></a>

```go
func EligibleAuthorization() LighthouseDefinitionEligibleAuthorizationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList">LighthouseDefinitionEligibleAuthorizationList</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.plan"></a>

```go
func Plan() LighthouseDefinitionPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference">LighthouseDefinitionPlanOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeouts"></a>

```go
func Timeouts() LighthouseDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference">LighthouseDefinitionTimeoutsOutputReference</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorizationInput"></a>

```go
func AuthorizationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EligibleAuthorizationInput`<sup>Optional</sup> <a name="EligibleAuthorizationInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorizationInput"></a>

```go
func EligibleAuthorizationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LighthouseDefinitionIdInput`<sup>Optional</sup> <a name="LighthouseDefinitionIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionIdInput"></a>

```go
func LighthouseDefinitionIdInput() *string
```

- *Type:* *string

---

##### `ManagingTenantIdInput`<sup>Optional</sup> <a name="ManagingTenantIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantIdInput"></a>

```go
func ManagingTenantIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.planInput"></a>

```go
func PlanInput() LighthouseDefinitionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LighthouseDefinitionId`<sup>Required</sup> <a name="LighthouseDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionId"></a>

```go
func LighthouseDefinitionId() *string
```

- *Type:* *string

---

##### `ManagingTenantId`<sup>Required</sup> <a name="ManagingTenantId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantId"></a>

```go
func ManagingTenantId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LighthouseDefinitionAuthorization <a name="LighthouseDefinitionAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionAuthorization {
	PrincipalId: *string,
	RoleDefinitionId: *string,
	DelegatedRoleDefinitionIds: *[]*string,
	PrincipalDisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.delegatedRoleDefinitionIds">DelegatedRoleDefinitionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.roleDefinitionId"></a>

```go
RoleDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}.

---

##### `DelegatedRoleDefinitionIds`<sup>Optional</sup> <a name="DelegatedRoleDefinitionIds" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.delegatedRoleDefinitionIds"></a>

```go
DelegatedRoleDefinitionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}.

---

##### `PrincipalDisplayName`<sup>Optional</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalDisplayName"></a>

```go
PrincipalDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionConfig <a name="LighthouseDefinitionConfig" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Authorization: interface{},
	ManagingTenantId: *string,
	Name: *string,
	Scope: *string,
	Description: *string,
	EligibleAuthorization: interface{},
	Id: *string,
	LighthouseDefinitionId: *string,
	Plan: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.lighthouseDefinition.LighthouseDefinitionPlan,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.lighthouseDefinition.LighthouseDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.authorization">Authorization</a></code> | <code>interface{}</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.managingTenantId">ManagingTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#description LighthouseDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.eligibleAuthorization">EligibleAuthorization</a></code> | <code>interface{}</code> | eligible_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#id LighthouseDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lighthouseDefinitionId">LighthouseDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.authorization"></a>

```go
Authorization interface{}
```

- *Type:* interface{}

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#authorization LighthouseDefinition#authorization}

---

##### `ManagingTenantId`<sup>Required</sup> <a name="ManagingTenantId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.managingTenantId"></a>

```go
ManagingTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#description LighthouseDefinition#description}.

---

##### `EligibleAuthorization`<sup>Optional</sup> <a name="EligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.eligibleAuthorization"></a>

```go
EligibleAuthorization interface{}
```

- *Type:* interface{}

eligible_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#eligible_authorization LighthouseDefinition#eligible_authorization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#id LighthouseDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LighthouseDefinitionId`<sup>Optional</sup> <a name="LighthouseDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lighthouseDefinitionId"></a>

```go
LighthouseDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}.

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.plan"></a>

```go
Plan LighthouseDefinitionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#plan LighthouseDefinition#plan}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.timeouts"></a>

```go
Timeouts LighthouseDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#timeouts LighthouseDefinition#timeouts}

---

### LighthouseDefinitionEligibleAuthorization <a name="LighthouseDefinitionEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionEligibleAuthorization {
	PrincipalId: *string,
	RoleDefinitionId: *string,
	JustInTimeAccessPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy,
	PrincipalDisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.justInTimeAccessPolicy">JustInTimeAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | just_in_time_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.roleDefinitionId"></a>

```go
RoleDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}.

---

##### `JustInTimeAccessPolicy`<sup>Optional</sup> <a name="JustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.justInTimeAccessPolicy"></a>

```go
JustInTimeAccessPolicy LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

just_in_time_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#just_in_time_access_policy LighthouseDefinition#just_in_time_access_policy}

---

##### `PrincipalDisplayName`<sup>Optional</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalDisplayName"></a>

```go
PrincipalDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy {
	Approver: interface{},
	MaximumActivationDuration: *string,
	MultiFactorAuthProvider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.approver">Approver</a></code> | <code>interface{}</code> | approver block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.maximumActivationDuration">MaximumActivationDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.multiFactorAuthProvider">MultiFactorAuthProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}. |

---

##### `Approver`<sup>Optional</sup> <a name="Approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.approver"></a>

```go
Approver interface{}
```

- *Type:* interface{}

approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#approver LighthouseDefinition#approver}

---

##### `MaximumActivationDuration`<sup>Optional</sup> <a name="MaximumActivationDuration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.maximumActivationDuration"></a>

```go
MaximumActivationDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}.

---

##### `MultiFactorAuthProvider`<sup>Optional</sup> <a name="MultiFactorAuthProvider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.multiFactorAuthProvider"></a>

```go
MultiFactorAuthProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}.

---

### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover {
	PrincipalId: *string,
	PrincipalDisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalId">PrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `PrincipalDisplayName`<sup>Optional</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalDisplayName"></a>

```go
PrincipalDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionPlan <a name="LighthouseDefinitionPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionPlan {
	Name: *string,
	Product: *string,
	Publisher: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#product LighthouseDefinition#product}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#version LighthouseDefinition#version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#product LighthouseDefinition#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#version LighthouseDefinition#version}.

---

### LighthouseDefinitionTimeouts <a name="LighthouseDefinitionTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

&lighthousedefinition.LighthouseDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#create LighthouseDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#read LighthouseDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#update LighthouseDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#create LighthouseDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#read LighthouseDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/lighthouse_definition#update LighthouseDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LighthouseDefinitionAuthorizationList <a name="LighthouseDefinitionAuthorizationList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionAuthorizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LighthouseDefinitionAuthorizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get"></a>

```go
func Get(index *f64) LighthouseDefinitionAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LighthouseDefinitionAuthorizationOutputReference <a name="LighthouseDefinitionAuthorizationOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LighthouseDefinitionAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetDelegatedRoleDefinitionIds">ResetDelegatedRoleDefinitionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetPrincipalDisplayName">ResetPrincipalDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelegatedRoleDefinitionIds` <a name="ResetDelegatedRoleDefinitionIds" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetDelegatedRoleDefinitionIds"></a>

```go
func ResetDelegatedRoleDefinitionIds()
```

##### `ResetPrincipalDisplayName` <a name="ResetPrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetPrincipalDisplayName"></a>

```go
func ResetPrincipalDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIdsInput">DelegatedRoleDefinitionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayNameInput">PrincipalDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIds">DelegatedRoleDefinitionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelegatedRoleDefinitionIdsInput`<sup>Optional</sup> <a name="DelegatedRoleDefinitionIdsInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIdsInput"></a>

```go
func DelegatedRoleDefinitionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalDisplayNameInput`<sup>Optional</sup> <a name="PrincipalDisplayNameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayNameInput"></a>

```go
func PrincipalDisplayNameInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```go
func RoleDefinitionIdInput() *string
```

- *Type:* *string

---

##### `DelegatedRoleDefinitionIds`<sup>Required</sup> <a name="DelegatedRoleDefinitionIds" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIds"></a>

```go
func DelegatedRoleDefinitionIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalDisplayName`<sup>Required</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayName"></a>

```go
func PrincipalDisplayName() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionId"></a>

```go
func RoleDefinitionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get"></a>

```go
func Get(index *f64) LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resetPrincipalDisplayName">ResetPrincipalDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalDisplayName` <a name="ResetPrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resetPrincipalDisplayName"></a>

```go
func ResetPrincipalDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayNameInput">PrincipalDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalDisplayNameInput`<sup>Optional</sup> <a name="PrincipalDisplayNameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayNameInput"></a>

```go
func PrincipalDisplayNameInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `PrincipalDisplayName`<sup>Required</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayName"></a>

```go
func PrincipalDisplayName() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover">PutApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetApprover">ResetApprover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMaximumActivationDuration">ResetMaximumActivationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMultiFactorAuthProvider">ResetMultiFactorAuthProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprover` <a name="PutApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover"></a>

```go
func PutApprover(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApprover` <a name="ResetApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetApprover"></a>

```go
func ResetApprover()
```

##### `ResetMaximumActivationDuration` <a name="ResetMaximumActivationDuration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMaximumActivationDuration"></a>

```go
func ResetMaximumActivationDuration()
```

##### `ResetMultiFactorAuthProvider` <a name="ResetMultiFactorAuthProvider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMultiFactorAuthProvider"></a>

```go
func ResetMultiFactorAuthProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approver">Approver</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approverInput">ApproverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDurationInput">MaximumActivationDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProviderInput">MultiFactorAuthProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDuration">MaximumActivationDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProvider">MultiFactorAuthProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Approver`<sup>Required</sup> <a name="Approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approver"></a>

```go
func Approver() LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList</a>

---

##### `ApproverInput`<sup>Optional</sup> <a name="ApproverInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approverInput"></a>

```go
func ApproverInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumActivationDurationInput`<sup>Optional</sup> <a name="MaximumActivationDurationInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDurationInput"></a>

```go
func MaximumActivationDurationInput() *string
```

- *Type:* *string

---

##### `MultiFactorAuthProviderInput`<sup>Optional</sup> <a name="MultiFactorAuthProviderInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProviderInput"></a>

```go
func MultiFactorAuthProviderInput() *string
```

- *Type:* *string

---

##### `MaximumActivationDuration`<sup>Required</sup> <a name="MaximumActivationDuration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDuration"></a>

```go
func MaximumActivationDuration() *string
```

- *Type:* *string

---

##### `MultiFactorAuthProvider`<sup>Required</sup> <a name="MultiFactorAuthProvider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProvider"></a>

```go
func MultiFactorAuthProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---


### LighthouseDefinitionEligibleAuthorizationList <a name="LighthouseDefinitionEligibleAuthorizationList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionEligibleAuthorizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LighthouseDefinitionEligibleAuthorizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get"></a>

```go
func Get(index *f64) LighthouseDefinitionEligibleAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LighthouseDefinitionEligibleAuthorizationOutputReference <a name="LighthouseDefinitionEligibleAuthorizationOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionEligibleAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LighthouseDefinitionEligibleAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy">PutJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetJustInTimeAccessPolicy">ResetJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetPrincipalDisplayName">ResetPrincipalDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJustInTimeAccessPolicy` <a name="PutJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy"></a>

```go
func PutJustInTimeAccessPolicy(value LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---

##### `ResetJustInTimeAccessPolicy` <a name="ResetJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetJustInTimeAccessPolicy"></a>

```go
func ResetJustInTimeAccessPolicy()
```

##### `ResetPrincipalDisplayName` <a name="ResetPrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetPrincipalDisplayName"></a>

```go
func ResetPrincipalDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicy">JustInTimeAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicyInput">JustInTimeAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayNameInput">PrincipalDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayName">PrincipalDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JustInTimeAccessPolicy`<sup>Required</sup> <a name="JustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicy"></a>

```go
func JustInTimeAccessPolicy() LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference</a>

---

##### `JustInTimeAccessPolicyInput`<sup>Optional</sup> <a name="JustInTimeAccessPolicyInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicyInput"></a>

```go
func JustInTimeAccessPolicyInput() LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---

##### `PrincipalDisplayNameInput`<sup>Optional</sup> <a name="PrincipalDisplayNameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayNameInput"></a>

```go
func PrincipalDisplayNameInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```go
func RoleDefinitionIdInput() *string
```

- *Type:* *string

---

##### `PrincipalDisplayName`<sup>Required</sup> <a name="PrincipalDisplayName" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayName"></a>

```go
func PrincipalDisplayName() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionId"></a>

```go
func RoleDefinitionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LighthouseDefinitionPlanOutputReference <a name="LighthouseDefinitionPlanOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LighthouseDefinitionPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() LighthouseDefinitionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---


### LighthouseDefinitionTimeoutsOutputReference <a name="LighthouseDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/lighthousedefinition"

lighthousedefinition.NewLighthouseDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LighthouseDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



