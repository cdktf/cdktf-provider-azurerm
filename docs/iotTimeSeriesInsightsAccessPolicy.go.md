# `azurerm_iot_time_series_insights_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy).

# `iotTimeSeriesInsightsAccessPolicy` Submodule <a name="`iotTimeSeriesInsightsAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsAccessPolicy <a name="IotTimeSeriesInsightsAccessPolicy" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy azurerm_iot_time_series_insights_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

iottimeseriesinsightsaccesspolicy.NewIotTimeSeriesInsightsAccessPolicy(scope Construct, id *string, config IotTimeSeriesInsightsAccessPolicyConfig) IotTimeSeriesInsightsAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig">IotTimeSeriesInsightsAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig">IotTimeSeriesInsightsAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts"></a>

```go
func PutTimeouts(value IotTimeSeriesInsightsAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

iottimeseriesinsightsaccesspolicy.IotTimeSeriesInsightsAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

iottimeseriesinsightsaccesspolicy.IotTimeSeriesInsightsAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

iottimeseriesinsightsaccesspolicy.IotTimeSeriesInsightsAccessPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput">PrincipalObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput">TimeSeriesInsightsEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId">PrincipalObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId">TimeSeriesInsightsEnvironmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts"></a>

```go
func Timeouts() IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrincipalObjectIdInput`<sup>Optional</sup> <a name="PrincipalObjectIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput"></a>

```go
func PrincipalObjectIdInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeSeriesInsightsEnvironmentIdInput`<sup>Optional</sup> <a name="TimeSeriesInsightsEnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput"></a>

```go
func TimeSeriesInsightsEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrincipalObjectId`<sup>Required</sup> <a name="PrincipalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId"></a>

```go
func PrincipalObjectId() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `TimeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="TimeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId"></a>

```go
func TimeSeriesInsightsEnvironmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsAccessPolicyConfig <a name="IotTimeSeriesInsightsAccessPolicyConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

&iottimeseriesinsightsaccesspolicy.IotTimeSeriesInsightsAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PrincipalObjectId: *string,
	Roles: *[]*string,
	TimeSeriesInsightsEnvironmentId: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId">PrincipalObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId">TimeSeriesInsightsEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}.

---

##### `PrincipalObjectId`<sup>Required</sup> <a name="PrincipalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId"></a>

```go
PrincipalObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}.

---

##### `TimeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="TimeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId"></a>

```go
TimeSeriesInsightsEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts"></a>

```go
Timeouts IotTimeSeriesInsightsAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#timeouts IotTimeSeriesInsightsAccessPolicy#timeouts}

---

### IotTimeSeriesInsightsAccessPolicyTimeouts <a name="IotTimeSeriesInsightsAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

&iottimeseriesinsightsaccesspolicy.IotTimeSeriesInsightsAccessPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference <a name="IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/iottimeseriesinsightsaccesspolicy"

iottimeseriesinsightsaccesspolicy.NewIotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



