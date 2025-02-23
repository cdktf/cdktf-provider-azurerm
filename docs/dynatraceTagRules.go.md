# `dynatraceTagRules` Submodule <a name="`dynatraceTagRules` Submodule" id="@cdktf/provider-azurerm.dynatraceTagRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynatraceTagRules <a name="DynatraceTagRules" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules azurerm_dynatrace_tag_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRules(scope Construct, id *string, config DynatraceTagRulesConfig) DynatraceTagRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig">DynatraceTagRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig">DynatraceTagRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule">PutLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule">PutMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule">ResetLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule">ResetMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogRule` <a name="PutLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule"></a>

```go
func PutLogRule(value DynatraceTagRulesLogRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putLogRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `PutMetricRule` <a name="PutMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule"></a>

```go
func PutMetricRule(value DynatraceTagRulesMetricRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putMetricRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts"></a>

```go
func PutTimeouts(value DynatraceTagRulesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetId"></a>

```go
func ResetId()
```

##### `ResetLogRule` <a name="ResetLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetLogRule"></a>

```go
func ResetLogRule()
```

##### `ResetMetricRule` <a name="ResetMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetMetricRule"></a>

```go
func ResetMetricRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.DynatraceTagRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.DynatraceTagRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.DynatraceTagRules_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.DynatraceTagRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DynatraceTagRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DynatraceTagRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DynatraceTagRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DynatraceTagRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule">LogRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule">MetricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput">LogRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput">MetricRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput">MonitorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId">MonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogRule`<sup>Required</sup> <a name="LogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRule"></a>

```go
func LogRule() DynatraceTagRulesLogRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference">DynatraceTagRulesLogRuleOutputReference</a>

---

##### `MetricRule`<sup>Required</sup> <a name="MetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRule"></a>

```go
func MetricRule() DynatraceTagRulesMetricRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference">DynatraceTagRulesMetricRuleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeouts"></a>

```go
func Timeouts() DynatraceTagRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference">DynatraceTagRulesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogRuleInput`<sup>Optional</sup> <a name="LogRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.logRuleInput"></a>

```go
func LogRuleInput() DynatraceTagRulesLogRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---

##### `MetricRuleInput`<sup>Optional</sup> <a name="MetricRuleInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.metricRuleInput"></a>

```go
func MetricRuleInput() DynatraceTagRulesMetricRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorIdInput"></a>

```go
func MonitorIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.monitorId"></a>

```go
func MonitorId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynatraceTagRulesConfig <a name="DynatraceTagRulesConfig" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

&dynatracetagrules.DynatraceTagRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorId: *string,
	Name: *string,
	Id: *string,
	LogRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dynatraceTagRules.DynatraceTagRulesLogRule,
	MetricRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId">MonitorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule">LogRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | log_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule">MetricRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | metric_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.monitorId"></a>

```go
MonitorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#monitor_id DynatraceTagRules#monitor_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#id DynatraceTagRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogRule`<sup>Optional</sup> <a name="LogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.logRule"></a>

```go
LogRule DynatraceTagRulesLogRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

log_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#log_rule DynatraceTagRules#log_rule}

---

##### `MetricRule`<sup>Optional</sup> <a name="MetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.metricRule"></a>

```go
MetricRule DynatraceTagRulesMetricRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

metric_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#metric_rule DynatraceTagRules#metric_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesConfig.property.timeouts"></a>

```go
Timeouts DynatraceTagRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts">DynatraceTagRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#timeouts DynatraceTagRules#timeouts}

---

### DynatraceTagRulesLogRule <a name="DynatraceTagRulesLogRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

&dynatracetagrules.DynatraceTagRulesLogRule {
	FilteringTag: interface{},
	SendActivityLogsEnabled: interface{},
	SendAzureActiveDirectoryLogsEnabled: interface{},
	SendSubscriptionLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag">FilteringTag</a></code> | <code>interface{}</code> | filtering_tag block. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled">SendActivityLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled">SendAzureActiveDirectoryLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled">SendSubscriptionLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}. |

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.filteringTag"></a>

```go
FilteringTag interface{}
```

- *Type:* interface{}

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

##### `SendActivityLogsEnabled`<sup>Optional</sup> <a name="SendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendActivityLogsEnabled"></a>

```go
SendActivityLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#send_activity_logs_enabled DynatraceTagRules#send_activity_logs_enabled}.

---

##### `SendAzureActiveDirectoryLogsEnabled`<sup>Optional</sup> <a name="SendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendAzureActiveDirectoryLogsEnabled"></a>

```go
SendAzureActiveDirectoryLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#send_azure_active_directory_logs_enabled DynatraceTagRules#send_azure_active_directory_logs_enabled}.

---

##### `SendSubscriptionLogsEnabled`<sup>Optional</sup> <a name="SendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule.property.sendSubscriptionLogsEnabled"></a>

```go
SendSubscriptionLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#send_subscription_logs_enabled DynatraceTagRules#send_subscription_logs_enabled}.

---

### DynatraceTagRulesLogRuleFilteringTag <a name="DynatraceTagRulesLogRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

&dynatracetagrules.DynatraceTagRulesLogRuleFilteringTag {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesMetricRule <a name="DynatraceTagRulesMetricRule" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

&dynatracetagrules.DynatraceTagRulesMetricRule {
	FilteringTag: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag">FilteringTag</a></code> | <code>interface{}</code> | filtering_tag block. |

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule.property.filteringTag"></a>

```go
FilteringTag interface{}
```

- *Type:* interface{}

filtering_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#filtering_tag DynatraceTagRules#filtering_tag}

---

### DynatraceTagRulesMetricRuleFilteringTag <a name="DynatraceTagRulesMetricRuleFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

&dynatracetagrules.DynatraceTagRulesMetricRuleFilteringTag {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#action DynatraceTagRules#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#name DynatraceTagRules#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#value DynatraceTagRules#value}.

---

### DynatraceTagRulesTimeouts <a name="DynatraceTagRulesTimeouts" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

&dynatracetagrules.DynatraceTagRulesTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#create DynatraceTagRules#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#delete DynatraceTagRules#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/dynatrace_tag_rules#read DynatraceTagRules#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynatraceTagRulesLogRuleFilteringTagList <a name="DynatraceTagRulesLogRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesLogRuleFilteringTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynatraceTagRulesLogRuleFilteringTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get"></a>

```go
func Get(index *f64) DynatraceTagRulesLogRuleFilteringTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynatraceTagRulesLogRuleFilteringTagOutputReference <a name="DynatraceTagRulesLogRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesLogRuleFilteringTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynatraceTagRulesLogRuleFilteringTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynatraceTagRulesLogRuleOutputReference <a name="DynatraceTagRulesLogRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesLogRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceTagRulesLogRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag">PutFilteringTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled">ResetSendActivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled">ResetSendAzureActiveDirectoryLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled">ResetSendSubscriptionLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilteringTag` <a name="PutFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag"></a>

```go
func PutFilteringTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSendActivityLogsEnabled` <a name="ResetSendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendActivityLogsEnabled"></a>

```go
func ResetSendActivityLogsEnabled()
```

##### `ResetSendAzureActiveDirectoryLogsEnabled` <a name="ResetSendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendAzureActiveDirectoryLogsEnabled"></a>

```go
func ResetSendAzureActiveDirectoryLogsEnabled()
```

##### `ResetSendSubscriptionLogsEnabled` <a name="ResetSendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.resetSendSubscriptionLogsEnabled"></a>

```go
func ResetSendSubscriptionLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag">FilteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput">FilteringTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput">SendActivityLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput">SendAzureActiveDirectoryLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput">SendSubscriptionLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled">SendActivityLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled">SendAzureActiveDirectoryLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled">SendSubscriptionLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTag"></a>

```go
func FilteringTag() DynatraceTagRulesLogRuleFilteringTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleFilteringTagList">DynatraceTagRulesLogRuleFilteringTagList</a>

---

##### `FilteringTagInput`<sup>Optional</sup> <a name="FilteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.filteringTagInput"></a>

```go
func FilteringTagInput() interface{}
```

- *Type:* interface{}

---

##### `SendActivityLogsEnabledInput`<sup>Optional</sup> <a name="SendActivityLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabledInput"></a>

```go
func SendActivityLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendAzureActiveDirectoryLogsEnabledInput`<sup>Optional</sup> <a name="SendAzureActiveDirectoryLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabledInput"></a>

```go
func SendAzureActiveDirectoryLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendSubscriptionLogsEnabledInput`<sup>Optional</sup> <a name="SendSubscriptionLogsEnabledInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabledInput"></a>

```go
func SendSubscriptionLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendActivityLogsEnabled`<sup>Required</sup> <a name="SendActivityLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendActivityLogsEnabled"></a>

```go
func SendActivityLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SendAzureActiveDirectoryLogsEnabled`<sup>Required</sup> <a name="SendAzureActiveDirectoryLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendAzureActiveDirectoryLogsEnabled"></a>

```go
func SendAzureActiveDirectoryLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SendSubscriptionLogsEnabled`<sup>Required</sup> <a name="SendSubscriptionLogsEnabled" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.sendSubscriptionLogsEnabled"></a>

```go
func SendSubscriptionLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DynatraceTagRulesLogRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesLogRule">DynatraceTagRulesLogRule</a>

---


### DynatraceTagRulesMetricRuleFilteringTagList <a name="DynatraceTagRulesMetricRuleFilteringTagList" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesMetricRuleFilteringTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynatraceTagRulesMetricRuleFilteringTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get"></a>

```go
func Get(index *f64) DynatraceTagRulesMetricRuleFilteringTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynatraceTagRulesMetricRuleFilteringTagOutputReference <a name="DynatraceTagRulesMetricRuleFilteringTagOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesMetricRuleFilteringTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynatraceTagRulesMetricRuleFilteringTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynatraceTagRulesMetricRuleOutputReference <a name="DynatraceTagRulesMetricRuleOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesMetricRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceTagRulesMetricRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag">PutFilteringTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilteringTag` <a name="PutFilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag"></a>

```go
func PutFilteringTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.putFilteringTag.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag">FilteringTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput">FilteringTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilteringTag`<sup>Required</sup> <a name="FilteringTag" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTag"></a>

```go
func FilteringTag() DynatraceTagRulesMetricRuleFilteringTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleFilteringTagList">DynatraceTagRulesMetricRuleFilteringTagList</a>

---

##### `FilteringTagInput`<sup>Optional</sup> <a name="FilteringTagInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.filteringTagInput"></a>

```go
func FilteringTagInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DynatraceTagRulesMetricRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesMetricRule">DynatraceTagRulesMetricRule</a>

---


### DynatraceTagRulesTimeoutsOutputReference <a name="DynatraceTagRulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dynatracetagrules"

dynatracetagrules.NewDynatraceTagRulesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DynatraceTagRulesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dynatraceTagRules.DynatraceTagRulesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



