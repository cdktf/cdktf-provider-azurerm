# `springCloudDynatraceApplicationPerformanceMonitoring` Submodule <a name="`springCloudDynatraceApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoring <a name="SpringCloudDynatraceApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring azurerm_spring_cloud_dynatrace_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

springclouddynatraceapplicationperformancemonitoring.NewSpringCloudDynatraceApplicationPerformanceMonitoring(scope Construct, id *string, config SpringCloudDynatraceApplicationPerformanceMonitoringConfig) SpringCloudDynatraceApplicationPerformanceMonitoring
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig">SpringCloudDynatraceApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig">SpringCloudDynatraceApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled">ResetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId"></a>

```go
func ResetEnvironmentId()
```

##### `ResetGloballyEnabled` <a name="ResetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```go
func ResetGloballyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

springclouddynatraceapplicationperformancemonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

springclouddynatraceapplicationperformancemonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

springclouddynatraceapplicationperformancemonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

springclouddynatraceapplicationperformancemonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpringCloudDynatraceApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpringCloudDynatraceApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudDynatraceApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput">ConnectionPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput">GloballyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput">TenantTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint">ConnectionPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled">GloballyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken">TenantToken</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts"></a>

```go
func Timeouts() SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `ConnectionPointInput`<sup>Optional</sup> <a name="ConnectionPointInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput"></a>

```go
func ConnectionPointInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `GloballyEnabledInput`<sup>Optional</sup> <a name="GloballyEnabledInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```go
func GloballyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```go
func SpringCloudServiceIdInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `TenantTokenInput`<sup>Optional</sup> <a name="TenantTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput"></a>

```go
func TenantTokenInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `ConnectionPoint`<sup>Required</sup> <a name="ConnectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint"></a>

```go
func ConnectionPoint() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `GloballyEnabled`<sup>Required</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```go
func GloballyEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```go
func SpringCloudServiceId() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `TenantToken`<sup>Required</sup> <a name="TenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken"></a>

```go
func TenantToken() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringConfig <a name="SpringCloudDynatraceApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

&springclouddynatraceapplicationperformancemonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionPoint: *string,
	Name: *string,
	SpringCloudServiceId: *string,
	Tenant: *string,
	TenantToken: *string,
	ApiToken: *string,
	ApiUrl: *string,
	EnvironmentId: *string,
	GloballyEnabled: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint">ConnectionPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant">Tenant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken">TenantToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken">ApiToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled">GloballyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionPoint`<sup>Required</sup> <a name="ConnectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint"></a>

```go
ConnectionPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```go
SpringCloudServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}.

---

##### `TenantToken`<sup>Required</sup> <a name="TenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken"></a>

```go
TenantToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}.

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}.

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}.

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}.

---

##### `GloballyEnabled`<sup>Optional</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```go
GloballyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```go
Timeouts SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#timeouts SpringCloudDynatraceApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

&springclouddynatraceapplicationperformancemonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/springclouddynatraceapplicationperformancemonitoring"

springclouddynatraceapplicationperformancemonitoring.NewSpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



