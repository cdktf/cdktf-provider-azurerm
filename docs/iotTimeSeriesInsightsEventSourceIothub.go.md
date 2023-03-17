# `iotTimeSeriesInsightsEventSourceIothub` Submodule <a name="`iotTimeSeriesInsightsEventSourceIothub` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsEventSourceIothub <a name="IotTimeSeriesInsightsEventSourceIothub" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub azurerm_iot_time_series_insights_event_source_iothub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

iottimeseriesinsightseventsourceiothub.NewIotTimeSeriesInsightsEventSourceIothub(scope Construct, id *string, config IotTimeSeriesInsightsEventSourceIothubConfig) IotTimeSeriesInsightsEventSourceIothub
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig">IotTimeSeriesInsightsEventSourceIothubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig">IotTimeSeriesInsightsEventSourceIothubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimestampPropertyName">ResetTimestampPropertyName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts"></a>

```go
func PutTimeouts(value IotTimeSeriesInsightsEventSourceIothubTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimestampPropertyName` <a name="ResetTimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.resetTimestampPropertyName"></a>

```go
func ResetTimestampPropertyName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

iottimeseriesinsightseventsourceiothub.IotTimeSeriesInsightsEventSourceIothub_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

iottimeseriesinsightseventsourceiothub.IotTimeSeriesInsightsEventSourceIothub_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

iottimeseriesinsightseventsourceiothub.IotTimeSeriesInsightsEventSourceIothub_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupNameInput">ConsumerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceIdInput">EventSourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubNameInput">IothubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyInput">SharedAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyNameInput">SharedAccessKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyNameInput">TimestampPropertyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupName">ConsumerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceId">EventSourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubName">IothubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKey">SharedAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyName">SharedAccessKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyName">TimestampPropertyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeouts"></a>

```go
func Timeouts() IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference</a>

---

##### `ConsumerGroupNameInput`<sup>Optional</sup> <a name="ConsumerGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupNameInput"></a>

```go
func ConsumerGroupNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `EventSourceResourceIdInput`<sup>Optional</sup> <a name="EventSourceResourceIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceIdInput"></a>

```go
func EventSourceResourceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubNameInput`<sup>Optional</sup> <a name="IothubNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubNameInput"></a>

```go
func IothubNameInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SharedAccessKeyInput`<sup>Optional</sup> <a name="SharedAccessKeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyInput"></a>

```go
func SharedAccessKeyInput() *string
```

- *Type:* *string

---

##### `SharedAccessKeyNameInput`<sup>Optional</sup> <a name="SharedAccessKeyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyNameInput"></a>

```go
func SharedAccessKeyNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampPropertyNameInput`<sup>Optional</sup> <a name="TimestampPropertyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyNameInput"></a>

```go
func TimestampPropertyNameInput() *string
```

- *Type:* *string

---

##### `ConsumerGroupName`<sup>Required</sup> <a name="ConsumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.consumerGroupName"></a>

```go
func ConsumerGroupName() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `EventSourceResourceId`<sup>Required</sup> <a name="EventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.eventSourceResourceId"></a>

```go
func EventSourceResourceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubName`<sup>Required</sup> <a name="IothubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.iothubName"></a>

```go
func IothubName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SharedAccessKey`<sup>Required</sup> <a name="SharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKey"></a>

```go
func SharedAccessKey() *string
```

- *Type:* *string

---

##### `SharedAccessKeyName`<sup>Required</sup> <a name="SharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.sharedAccessKeyName"></a>

```go
func SharedAccessKeyName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimestampPropertyName`<sup>Required</sup> <a name="TimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.timestampPropertyName"></a>

```go
func TimestampPropertyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothub.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsEventSourceIothubConfig <a name="IotTimeSeriesInsightsEventSourceIothubConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

&iottimeseriesinsightseventsourceiothub.IotTimeSeriesInsightsEventSourceIothubConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsumerGroupName: *string,
	EnvironmentId: *string,
	EventSourceResourceId: *string,
	IothubName: *string,
	Location: *string,
	Name: *string,
	SharedAccessKey: *string,
	SharedAccessKeyName: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts,
	TimestampPropertyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.consumerGroupName">ConsumerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.eventSourceResourceId">EventSourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.iothubName">IothubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKey">SharedAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKeyName">SharedAccessKeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timestampPropertyName">TimestampPropertyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumerGroupName`<sup>Required</sup> <a name="ConsumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.consumerGroupName"></a>

```go
ConsumerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}.

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}.

---

##### `EventSourceResourceId`<sup>Required</sup> <a name="EventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.eventSourceResourceId"></a>

```go
EventSourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}.

---

##### `IothubName`<sup>Required</sup> <a name="IothubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.iothubName"></a>

```go
IothubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#location IotTimeSeriesInsightsEventSourceIothub#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#name IotTimeSeriesInsightsEventSourceIothub#name}.

---

##### `SharedAccessKey`<sup>Required</sup> <a name="SharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKey"></a>

```go
SharedAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}.

---

##### `SharedAccessKeyName`<sup>Required</sup> <a name="SharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.sharedAccessKeyName"></a>

```go
SharedAccessKeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#id IotTimeSeriesInsightsEventSourceIothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#tags IotTimeSeriesInsightsEventSourceIothub#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timeouts"></a>

```go
Timeouts IotTimeSeriesInsightsEventSourceIothubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts">IotTimeSeriesInsightsEventSourceIothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#timeouts IotTimeSeriesInsightsEventSourceIothub#timeouts}

---

##### `TimestampPropertyName`<sup>Optional</sup> <a name="TimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubConfig.property.timestampPropertyName"></a>

```go
TimestampPropertyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}.

---

### IotTimeSeriesInsightsEventSourceIothubTimeouts <a name="IotTimeSeriesInsightsEventSourceIothubTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

&iottimeseriesinsightseventsourceiothub.IotTimeSeriesInsightsEventSourceIothubTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#create IotTimeSeriesInsightsEventSourceIothub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#delete IotTimeSeriesInsightsEventSourceIothub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#read IotTimeSeriesInsightsEventSourceIothub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub#update IotTimeSeriesInsightsEventSourceIothub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference <a name="IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/iottimeseriesinsightseventsourceiothub"

iottimeseriesinsightseventsourceiothub.NewIotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceIothub.IotTimeSeriesInsightsEventSourceIothubTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



