# `logAnalyticsDatasourceWindowsPerformanceCounter` Submodule <a name="`logAnalyticsDatasourceWindowsPerformanceCounter` Submodule" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounter <a name="LogAnalyticsDatasourceWindowsPerformanceCounter" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter azurerm_log_analytics_datasource_windows_performance_counter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

loganalyticsdatasourcewindowsperformancecounter.NewLogAnalyticsDatasourceWindowsPerformanceCounter(scope Construct, id *string, config LogAnalyticsDatasourceWindowsPerformanceCounterConfig) LogAnalyticsDatasourceWindowsPerformanceCounter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig">LogAnalyticsDatasourceWindowsPerformanceCounterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig">LogAnalyticsDatasourceWindowsPerformanceCounterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsDatasourceWindowsPerformanceCounter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

loganalyticsdatasourcewindowsperformancecounter.LogAnalyticsDatasourceWindowsPerformanceCounter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

loganalyticsdatasourcewindowsperformancecounter.LogAnalyticsDatasourceWindowsPerformanceCounter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

loganalyticsdatasourcewindowsperformancecounter.LogAnalyticsDatasourceWindowsPerformanceCounter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

loganalyticsdatasourcewindowsperformancecounter.LogAnalyticsDatasourceWindowsPerformanceCounter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsDatasourceWindowsPerformanceCounter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsDatasourceWindowsPerformanceCounter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsDatasourceWindowsPerformanceCounter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsDatasourceWindowsPerformanceCounter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference">LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterNameInput">CounterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectNameInput">ObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterName">CounterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference">LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference</a>

---

##### `CounterNameInput`<sup>Optional</sup> <a name="CounterNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterNameInput"></a>

```go
func CounterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectNameInput"></a>

```go
func ObjectNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceNameInput"></a>

```go
func WorkspaceNameInput() *string
```

- *Type:* *string

---

##### `CounterName`<sup>Required</sup> <a name="CounterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterName"></a>

```go
func CounterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceName"></a>

```go
func WorkspaceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounterConfig <a name="LogAnalyticsDatasourceWindowsPerformanceCounterConfig" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

&loganalyticsdatasourcewindowsperformancecounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CounterName: *string,
	InstanceName: *string,
	IntervalSeconds: *f64,
	Name: *string,
	ObjectName: *string,
	ResourceGroupName: *string,
	WorkspaceName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.counterName">CounterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.objectName">ObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CounterName`<sup>Required</sup> <a name="CounterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.counterName"></a>

```go
CounterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}.

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}.

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.objectName"></a>

```go
ObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}.

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.workspaceName"></a>

```go
WorkspaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#timeouts LogAnalyticsDatasourceWindowsPerformanceCounter#timeouts}

---

### LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts <a name="LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

&loganalyticsdatasourcewindowsperformancecounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/log_analytics_datasource_windows_performance_counter#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference <a name="LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/loganalyticsdatasourcewindowsperformancecounter"

loganalyticsdatasourcewindowsperformancecounter.NewLogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



