# `applicationInsightsAnalyticsItem` Submodule <a name="`applicationInsightsAnalyticsItem` Submodule" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsAnalyticsItem <a name="ApplicationInsightsAnalyticsItem" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item azurerm_application_insights_analytics_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

applicationinsightsanalyticsitem.NewApplicationInsightsAnalyticsItem(scope Construct, id *string, config ApplicationInsightsAnalyticsItemConfig) ApplicationInsightsAnalyticsItem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig">ApplicationInsightsAnalyticsItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig">ApplicationInsightsAnalyticsItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetFunctionAlias">ResetFunctionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationInsightsAnalyticsItemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

---

##### `ResetFunctionAlias` <a name="ResetFunctionAlias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetFunctionAlias"></a>

```go
func ResetFunctionAlias()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsAnalyticsItem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

applicationinsightsanalyticsitem.ApplicationInsightsAnalyticsItem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

applicationinsightsanalyticsitem.ApplicationInsightsAnalyticsItem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

applicationinsightsanalyticsitem.ApplicationInsightsAnalyticsItem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

applicationinsightsanalyticsitem.ApplicationInsightsAnalyticsItem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationInsightsAnalyticsItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationInsightsAnalyticsItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationInsightsAnalyticsItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsAnalyticsItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference">ApplicationInsightsAnalyticsItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsIdInput">ApplicationInsightsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAliasInput">FunctionAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAlias">FunctionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeouts"></a>

```go
func Timeouts() ApplicationInsightsAnalyticsItemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference">ApplicationInsightsAnalyticsItemTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ApplicationInsightsIdInput`<sup>Optional</sup> <a name="ApplicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsIdInput"></a>

```go
func ApplicationInsightsIdInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FunctionAliasInput`<sup>Optional</sup> <a name="FunctionAliasInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAliasInput"></a>

```go
func FunctionAliasInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsId"></a>

```go
func ApplicationInsightsId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FunctionAlias`<sup>Required</sup> <a name="FunctionAlias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAlias"></a>

```go
func FunctionAlias() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsAnalyticsItemConfig <a name="ApplicationInsightsAnalyticsItemConfig" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

&applicationinsightsanalyticsitem.ApplicationInsightsAnalyticsItemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationInsightsId: *string,
	Content: *string,
	Name: *string,
	Scope: *string,
	Type: *string,
	FunctionAlias: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.functionAlias">FunctionAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.applicationInsightsId"></a>

```go
ApplicationInsightsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}.

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}.

---

##### `FunctionAlias`<sup>Optional</sup> <a name="FunctionAlias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.functionAlias"></a>

```go
FunctionAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.timeouts"></a>

```go
Timeouts ApplicationInsightsAnalyticsItemTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#timeouts ApplicationInsightsAnalyticsItem#timeouts}

---

### ApplicationInsightsAnalyticsItemTimeouts <a name="ApplicationInsightsAnalyticsItemTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

&applicationinsightsanalyticsitem.ApplicationInsightsAnalyticsItemTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsAnalyticsItemTimeoutsOutputReference <a name="ApplicationInsightsAnalyticsItemTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/applicationinsightsanalyticsitem"

applicationinsightsanalyticsitem.NewApplicationInsightsAnalyticsItemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationInsightsAnalyticsItemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



