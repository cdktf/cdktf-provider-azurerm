# `iotTimeSeriesInsightsGen2Environment` Submodule <a name="`iotTimeSeriesInsightsGen2Environment` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsGen2Environment <a name="IotTimeSeriesInsightsGen2Environment" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment azurerm_iot_time_series_insights_gen2_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.NewIotTimeSeriesInsightsGen2Environment(scope Construct, id *string, config IotTimeSeriesInsightsGen2EnvironmentConfig) IotTimeSeriesInsightsGen2Environment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig">IotTimeSeriesInsightsGen2EnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig">IotTimeSeriesInsightsGen2EnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetWarmStoreDataRetentionTime">ResetWarmStoreDataRetentionTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage"></a>

```go
func PutStorage(value IotTimeSeriesInsightsGen2EnvironmentStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts"></a>

```go
func PutTimeouts(value IotTimeSeriesInsightsGen2EnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWarmStoreDataRetentionTime` <a name="ResetWarmStoreDataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.resetWarmStoreDataRetentionTime"></a>

```go
func ResetWarmStoreDataRetentionTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsGen2Environment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2Environment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2Environment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2Environment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2Environment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IotTimeSeriesInsightsGen2Environment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotTimeSeriesInsightsGen2Environment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotTimeSeriesInsightsGen2Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsGen2Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dataAccessFqdn">DataAccessFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference">IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idPropertiesInput">IdPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTimeInput">WarmStoreDataRetentionTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idProperties">IdProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTime">WarmStoreDataRetentionTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAccessFqdn`<sup>Required</sup> <a name="DataAccessFqdn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.dataAccessFqdn"></a>

```go
func DataAccessFqdn() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storage"></a>

```go
func Storage() IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference">IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeouts"></a>

```go
func Timeouts() IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference">IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdPropertiesInput`<sup>Optional</sup> <a name="IdPropertiesInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idPropertiesInput"></a>

```go
func IdPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.storageInput"></a>

```go
func StorageInput() IotTimeSeriesInsightsGen2EnvironmentStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WarmStoreDataRetentionTimeInput`<sup>Optional</sup> <a name="WarmStoreDataRetentionTimeInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTimeInput"></a>

```go
func WarmStoreDataRetentionTimeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdProperties`<sup>Required</sup> <a name="IdProperties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.idProperties"></a>

```go
func IdProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WarmStoreDataRetentionTime`<sup>Required</sup> <a name="WarmStoreDataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.warmStoreDataRetentionTime"></a>

```go
func WarmStoreDataRetentionTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2Environment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsGen2EnvironmentConfig <a name="IotTimeSeriesInsightsGen2EnvironmentConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

&iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2EnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdProperties: *[]*string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	Storage: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts,
	WarmStoreDataRetentionTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.idProperties">IdProperties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.warmStoreDataRetentionTime">WarmStoreDataRetentionTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdProperties`<sup>Required</sup> <a name="IdProperties" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.idProperties"></a>

```go
IdProperties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#id_properties IotTimeSeriesInsightsGen2Environment#id_properties}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#location IotTimeSeriesInsightsGen2Environment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#resource_group_name IotTimeSeriesInsightsGen2Environment#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#sku_name IotTimeSeriesInsightsGen2Environment#sku_name}.

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.storage"></a>

```go
Storage IotTimeSeriesInsightsGen2EnvironmentStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#storage IotTimeSeriesInsightsGen2Environment#storage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#id IotTimeSeriesInsightsGen2Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#tags IotTimeSeriesInsightsGen2Environment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.timeouts"></a>

```go
Timeouts IotTimeSeriesInsightsGen2EnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts">IotTimeSeriesInsightsGen2EnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#timeouts IotTimeSeriesInsightsGen2Environment#timeouts}

---

##### `WarmStoreDataRetentionTime`<sup>Optional</sup> <a name="WarmStoreDataRetentionTime" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentConfig.property.warmStoreDataRetentionTime"></a>

```go
WarmStoreDataRetentionTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#warm_store_data_retention_time IotTimeSeriesInsightsGen2Environment#warm_store_data_retention_time}.

---

### IotTimeSeriesInsightsGen2EnvironmentStorage <a name="IotTimeSeriesInsightsGen2EnvironmentStorage" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

&iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2EnvironmentStorage {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#key IotTimeSeriesInsightsGen2Environment#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#name IotTimeSeriesInsightsGen2Environment#name}.

---

### IotTimeSeriesInsightsGen2EnvironmentTimeouts <a name="IotTimeSeriesInsightsGen2EnvironmentTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

&iottimeseriesinsightsgen2environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#create IotTimeSeriesInsightsGen2Environment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#delete IotTimeSeriesInsightsGen2Environment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#read IotTimeSeriesInsightsGen2Environment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/iot_time_series_insights_gen2_environment#update IotTimeSeriesInsightsGen2Environment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference <a name="IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.NewIotTimeSeriesInsightsGen2EnvironmentStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() IotTimeSeriesInsightsGen2EnvironmentStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentStorage">IotTimeSeriesInsightsGen2EnvironmentStorage</a>

---


### IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference <a name="IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsgen2environment"

iottimeseriesinsightsgen2environment.NewIotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsGen2Environment.IotTimeSeriesInsightsGen2EnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



