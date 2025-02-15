# `springCloudNewRelicApplicationPerformanceMonitoring` Submodule <a name="`springCloudNewRelicApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoring <a name="SpringCloudNewRelicApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring azurerm_spring_cloud_new_relic_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

springcloudnewrelicapplicationperformancemonitoring.NewSpringCloudNewRelicApplicationPerformanceMonitoring(scope Construct, id *string, config SpringCloudNewRelicApplicationPerformanceMonitoringConfig) SpringCloudNewRelicApplicationPerformanceMonitoring
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig">SpringCloudNewRelicApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig">SpringCloudNewRelicApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAgentEnabled">ResetAgentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAppServerPort">ResetAppServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAuditModeEnabled">ResetAuditModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoAppNamingEnabled">ResetAutoAppNamingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoTransactionNamingEnabled">ResetAutoTransactionNamingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetCustomTracingEnabled">ResetCustomTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetGloballyEnabled">ResetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

---

##### `ResetAgentEnabled` <a name="ResetAgentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAgentEnabled"></a>

```go
func ResetAgentEnabled()
```

##### `ResetAppServerPort` <a name="ResetAppServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAppServerPort"></a>

```go
func ResetAppServerPort()
```

##### `ResetAuditModeEnabled` <a name="ResetAuditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAuditModeEnabled"></a>

```go
func ResetAuditModeEnabled()
```

##### `ResetAutoAppNamingEnabled` <a name="ResetAutoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoAppNamingEnabled"></a>

```go
func ResetAutoAppNamingEnabled()
```

##### `ResetAutoTransactionNamingEnabled` <a name="ResetAutoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetAutoTransactionNamingEnabled"></a>

```go
func ResetAutoTransactionNamingEnabled()
```

##### `ResetCustomTracingEnabled` <a name="ResetCustomTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetCustomTracingEnabled"></a>

```go
func ResetCustomTracingEnabled()
```

##### `ResetGloballyEnabled` <a name="ResetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```go
func ResetGloballyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

springcloudnewrelicapplicationperformancemonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

springcloudnewrelicapplicationperformancemonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

springcloudnewrelicapplicationperformancemonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

springcloudnewrelicapplicationperformancemonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudNewRelicApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudNewRelicApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudNewRelicApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabledInput">AgentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appNameInput">AppNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPortInput">AppServerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabledInput">AuditModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabledInput">AutoAppNamingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabledInput">AutoTransactionNamingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabledInput">CustomTracingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabledInput">GloballyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKeyInput">LicenseKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabled">AgentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPort">AppServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabled">AuditModeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabled">AutoAppNamingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabled">AutoTransactionNamingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabled">CustomTracingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabled">GloballyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKey">LicenseKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeouts"></a>

```go
func Timeouts() SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `AgentEnabledInput`<sup>Optional</sup> <a name="AgentEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabledInput"></a>

```go
func AgentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appNameInput"></a>

```go
func AppNameInput() *string
```

- *Type:* *string

---

##### `AppServerPortInput`<sup>Optional</sup> <a name="AppServerPortInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPortInput"></a>

```go
func AppServerPortInput() *f64
```

- *Type:* *f64

---

##### `AuditModeEnabledInput`<sup>Optional</sup> <a name="AuditModeEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabledInput"></a>

```go
func AuditModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoAppNamingEnabledInput`<sup>Optional</sup> <a name="AutoAppNamingEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabledInput"></a>

```go
func AutoAppNamingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoTransactionNamingEnabledInput`<sup>Optional</sup> <a name="AutoTransactionNamingEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabledInput"></a>

```go
func AutoTransactionNamingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomTracingEnabledInput`<sup>Optional</sup> <a name="CustomTracingEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabledInput"></a>

```go
func CustomTracingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GloballyEnabledInput`<sup>Optional</sup> <a name="GloballyEnabledInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```go
func GloballyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LicenseKeyInput`<sup>Optional</sup> <a name="LicenseKeyInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKeyInput"></a>

```go
func LicenseKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```go
func SpringCloudServiceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentEnabled`<sup>Required</sup> <a name="AgentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.agentEnabled"></a>

```go
func AgentEnabled() interface{}
```

- *Type:* interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `AppServerPort`<sup>Required</sup> <a name="AppServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.appServerPort"></a>

```go
func AppServerPort() *f64
```

- *Type:* *f64

---

##### `AuditModeEnabled`<sup>Required</sup> <a name="AuditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.auditModeEnabled"></a>

```go
func AuditModeEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoAppNamingEnabled`<sup>Required</sup> <a name="AutoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoAppNamingEnabled"></a>

```go
func AutoAppNamingEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoTransactionNamingEnabled`<sup>Required</sup> <a name="AutoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.autoTransactionNamingEnabled"></a>

```go
func AutoTransactionNamingEnabled() interface{}
```

- *Type:* interface{}

---

##### `CustomTracingEnabled`<sup>Required</sup> <a name="CustomTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.customTracingEnabled"></a>

```go
func CustomTracingEnabled() interface{}
```

- *Type:* interface{}

---

##### `GloballyEnabled`<sup>Required</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```go
func GloballyEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.licenseKey"></a>

```go
func LicenseKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```go
func SpringCloudServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoring.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoringConfig <a name="SpringCloudNewRelicApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

&springcloudnewrelicapplicationperformancemonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppName: *string,
	LicenseKey: *string,
	Name: *string,
	SpringCloudServiceId: *string,
	AgentEnabled: interface{},
	AppServerPort: *f64,
	AuditModeEnabled: interface{},
	AutoAppNamingEnabled: interface{},
	AutoTransactionNamingEnabled: interface{},
	CustomTracingEnabled: interface{},
	GloballyEnabled: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appName">AppName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.licenseKey">LicenseKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.agentEnabled">AgentEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appServerPort">AppServerPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.auditModeEnabled">AuditModeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoAppNamingEnabled">AutoAppNamingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoTransactionNamingEnabled">AutoTransactionNamingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.customTracingEnabled">CustomTracingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.globallyEnabled">GloballyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appName"></a>

```go
AppName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}.

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.licenseKey"></a>

```go
LicenseKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```go
SpringCloudServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `AgentEnabled`<sup>Optional</sup> <a name="AgentEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.agentEnabled"></a>

```go
AgentEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}.

---

##### `AppServerPort`<sup>Optional</sup> <a name="AppServerPort" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.appServerPort"></a>

```go
AppServerPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}.

---

##### `AuditModeEnabled`<sup>Optional</sup> <a name="AuditModeEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.auditModeEnabled"></a>

```go
AuditModeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}.

---

##### `AutoAppNamingEnabled`<sup>Optional</sup> <a name="AutoAppNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoAppNamingEnabled"></a>

```go
AutoAppNamingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}.

---

##### `AutoTransactionNamingEnabled`<sup>Optional</sup> <a name="AutoTransactionNamingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.autoTransactionNamingEnabled"></a>

```go
AutoTransactionNamingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}.

---

##### `CustomTracingEnabled`<sup>Optional</sup> <a name="CustomTracingEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.customTracingEnabled"></a>

```go
CustomTracingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}.

---

##### `GloballyEnabled`<sup>Optional</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```go
GloballyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```go
Timeouts SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts">SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#timeouts SpringCloudNewRelicApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts <a name="SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

&springcloudnewrelicapplicationperformancemonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudnewrelicapplicationperformancemonitoring"

springcloudnewrelicapplicationperformancemonitoring.NewSpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudNewRelicApplicationPerformanceMonitoring.SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



