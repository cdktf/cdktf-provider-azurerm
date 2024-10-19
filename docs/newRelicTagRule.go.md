# `newRelicTagRule` Submodule <a name="`newRelicTagRule` Submodule" id="@cdktf/provider-azurerm.newRelicTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicTagRule <a name="NewRelicTagRule" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule azurerm_new_relic_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewNewRelicTagRule(scope Construct, id *string, config NewRelicTagRuleConfig) NewRelicTagRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig">NewRelicTagRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig">NewRelicTagRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter">PutLogTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter">PutMetricTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled">ResetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled">ResetAzureActiveDirectoryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter">ResetLogTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled">ResetMetricEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter">ResetMetricTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled">ResetSubscriptionLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogTagFilter` <a name="PutLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter"></a>

```go
func PutLogTagFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putLogTagFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricTagFilter` <a name="PutMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter"></a>

```go
func PutMetricTagFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putMetricTagFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts"></a>

```go
func PutTimeouts(value NewRelicTagRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetActivityLogEnabled"></a>

```go
func ResetActivityLogEnabled()
```

##### `ResetAzureActiveDirectoryLogEnabled` <a name="ResetAzureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetAzureActiveDirectoryLogEnabled"></a>

```go
func ResetAzureActiveDirectoryLogEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLogTagFilter` <a name="ResetLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetLogTagFilter"></a>

```go
func ResetLogTagFilter()
```

##### `ResetMetricEnabled` <a name="ResetMetricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricEnabled"></a>

```go
func ResetMetricEnabled()
```

##### `ResetMetricTagFilter` <a name="ResetMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetMetricTagFilter"></a>

```go
func ResetMetricTagFilter()
```

##### `ResetSubscriptionLogEnabled` <a name="ResetSubscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetSubscriptionLogEnabled"></a>

```go
func ResetSubscriptionLogEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewRelicTagRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewRelicTagRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewRelicTagRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewRelicTagRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NewRelicTagRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NewRelicTagRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NewRelicTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NewRelicTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter">LogTagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter">MetricTagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput">AzureActiveDirectoryLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput">LogTagFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput">MetricEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput">MetricTagFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput">MonitorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput">SubscriptionLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled">AzureActiveDirectoryLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled">MetricEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId">MonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled">SubscriptionLogEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogTagFilter`<sup>Required</sup> <a name="LogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilter"></a>

```go
func LogTagFilter() NewRelicTagRuleLogTagFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList">NewRelicTagRuleLogTagFilterList</a>

---

##### `MetricTagFilter`<sup>Required</sup> <a name="MetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilter"></a>

```go
func MetricTagFilter() NewRelicTagRuleMetricTagFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList">NewRelicTagRuleMetricTagFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeouts"></a>

```go
func Timeouts() NewRelicTagRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference">NewRelicTagRuleTimeoutsOutputReference</a>

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabledInput"></a>

```go
func ActivityLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AzureActiveDirectoryLogEnabledInput`<sup>Optional</sup> <a name="AzureActiveDirectoryLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabledInput"></a>

```go
func AzureActiveDirectoryLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogTagFilterInput`<sup>Optional</sup> <a name="LogTagFilterInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.logTagFilterInput"></a>

```go
func LogTagFilterInput() interface{}
```

- *Type:* interface{}

---

##### `MetricEnabledInput`<sup>Optional</sup> <a name="MetricEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabledInput"></a>

```go
func MetricEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MetricTagFilterInput`<sup>Optional</sup> <a name="MetricTagFilterInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricTagFilterInput"></a>

```go
func MetricTagFilterInput() interface{}
```

- *Type:* interface{}

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorIdInput"></a>

```go
func MonitorIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionLogEnabledInput`<sup>Optional</sup> <a name="SubscriptionLogEnabledInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabledInput"></a>

```go
func SubscriptionLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.activityLogEnabled"></a>

```go
func ActivityLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `AzureActiveDirectoryLogEnabled`<sup>Required</sup> <a name="AzureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.azureActiveDirectoryLogEnabled"></a>

```go
func AzureActiveDirectoryLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricEnabled`<sup>Required</sup> <a name="MetricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.metricEnabled"></a>

```go
func MetricEnabled() interface{}
```

- *Type:* interface{}

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.monitorId"></a>

```go
func MonitorId() *string
```

- *Type:* *string

---

##### `SubscriptionLogEnabled`<sup>Required</sup> <a name="SubscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.subscriptionLogEnabled"></a>

```go
func SubscriptionLogEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicTagRuleConfig <a name="NewRelicTagRuleConfig" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

&newrelictagrule.NewRelicTagRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorId: *string,
	ActivityLogEnabled: interface{},
	AzureActiveDirectoryLogEnabled: interface{},
	Id: *string,
	LogTagFilter: interface{},
	MetricEnabled: interface{},
	MetricTagFilter: interface{},
	SubscriptionLogEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.newRelicTagRule.NewRelicTagRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId">MonitorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled">AzureActiveDirectoryLogEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter">LogTagFilter</a></code> | <code>interface{}</code> | log_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled">MetricEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter">MetricTagFilter</a></code> | <code>interface{}</code> | metric_tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled">SubscriptionLogEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.monitorId"></a>

```go
MonitorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}.

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.activityLogEnabled"></a>

```go
ActivityLogEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}.

---

##### `AzureActiveDirectoryLogEnabled`<sup>Optional</sup> <a name="AzureActiveDirectoryLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.azureActiveDirectoryLogEnabled"></a>

```go
AzureActiveDirectoryLogEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogTagFilter`<sup>Optional</sup> <a name="LogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.logTagFilter"></a>

```go
LogTagFilter interface{}
```

- *Type:* interface{}

log_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}

---

##### `MetricEnabled`<sup>Optional</sup> <a name="MetricEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricEnabled"></a>

```go
MetricEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}.

---

##### `MetricTagFilter`<sup>Optional</sup> <a name="MetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.metricTagFilter"></a>

```go
MetricTagFilter interface{}
```

- *Type:* interface{}

metric_tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}

---

##### `SubscriptionLogEnabled`<sup>Optional</sup> <a name="SubscriptionLogEnabled" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.subscriptionLogEnabled"></a>

```go
SubscriptionLogEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleConfig.property.timeouts"></a>

```go
Timeouts NewRelicTagRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts">NewRelicTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}

---

### NewRelicTagRuleLogTagFilter <a name="NewRelicTagRuleLogTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

&newrelictagrule.NewRelicTagRuleLogTagFilter {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleMetricTagFilter <a name="NewRelicTagRuleMetricTagFilter" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

&newrelictagrule.NewRelicTagRuleMetricTagFilter {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}.

---

### NewRelicTagRuleTimeouts <a name="NewRelicTagRuleTimeouts" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

&newrelictagrule.NewRelicTagRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicTagRuleLogTagFilterList <a name="NewRelicTagRuleLogTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewNewRelicTagRuleLogTagFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NewRelicTagRuleLogTagFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get"></a>

```go
func Get(index *f64) NewRelicTagRuleLogTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NewRelicTagRuleLogTagFilterOutputReference <a name="NewRelicTagRuleLogTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewNewRelicTagRuleLogTagFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NewRelicTagRuleLogTagFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleLogTagFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NewRelicTagRuleMetricTagFilterList <a name="NewRelicTagRuleMetricTagFilterList" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewNewRelicTagRuleMetricTagFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NewRelicTagRuleMetricTagFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get"></a>

```go
func Get(index *f64) NewRelicTagRuleMetricTagFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NewRelicTagRuleMetricTagFilterOutputReference <a name="NewRelicTagRuleMetricTagFilterOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewNewRelicTagRuleMetricTagFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NewRelicTagRuleMetricTagFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleMetricTagFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NewRelicTagRuleTimeoutsOutputReference <a name="NewRelicTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/newrelictagrule"

newrelictagrule.NewNewRelicTagRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NewRelicTagRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.newRelicTagRule.NewRelicTagRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



