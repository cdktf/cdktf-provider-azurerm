# `azurerm_frontdoor_custom_https_configuration`

Refer to the Terraform Registory for docs: [`azurerm_frontdoor_custom_https_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration).

# `frontdoorCustomHttpsConfiguration` Submodule <a name="`frontdoorCustomHttpsConfiguration` Submodule" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorCustomHttpsConfiguration <a name="FrontdoorCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration azurerm_frontdoor_custom_https_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

frontdoorcustomhttpsconfiguration.NewFrontdoorCustomHttpsConfiguration(scope Construct, id *string, config FrontdoorCustomHttpsConfigurationConfig) FrontdoorCustomHttpsConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig">FrontdoorCustomHttpsConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig">FrontdoorCustomHttpsConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration">PutCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetCustomHttpsConfiguration">ResetCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomHttpsConfiguration` <a name="PutCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration"></a>

```go
func PutCustomHttpsConfiguration(value FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value FrontdoorCustomHttpsConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

---

##### `ResetCustomHttpsConfiguration` <a name="ResetCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetCustomHttpsConfiguration"></a>

```go
func ResetCustomHttpsConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

frontdoorcustomhttpsconfiguration.FrontdoorCustomHttpsConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

frontdoorcustomhttpsconfiguration.FrontdoorCustomHttpsConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

frontdoorcustomhttpsconfiguration.FrontdoorCustomHttpsConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfiguration">CustomHttpsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference">FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference">FrontdoorCustomHttpsConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfigurationInput">CustomHttpsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabledInput">CustomHttpsProvisioningEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointIdInput">FrontendEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabled">CustomHttpsProvisioningEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointId">FrontendEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomHttpsConfiguration`<sup>Required</sup> <a name="CustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfiguration"></a>

```go
func CustomHttpsConfiguration() FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference">FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeouts"></a>

```go
func Timeouts() FrontdoorCustomHttpsConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference">FrontdoorCustomHttpsConfigurationTimeoutsOutputReference</a>

---

##### `CustomHttpsConfigurationInput`<sup>Optional</sup> <a name="CustomHttpsConfigurationInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfigurationInput"></a>

```go
func CustomHttpsConfigurationInput() FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---

##### `CustomHttpsProvisioningEnabledInput`<sup>Optional</sup> <a name="CustomHttpsProvisioningEnabledInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabledInput"></a>

```go
func CustomHttpsProvisioningEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FrontendEndpointIdInput`<sup>Optional</sup> <a name="FrontendEndpointIdInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointIdInput"></a>

```go
func FrontendEndpointIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomHttpsProvisioningEnabled`<sup>Required</sup> <a name="CustomHttpsProvisioningEnabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabled"></a>

```go
func CustomHttpsProvisioningEnabled() interface{}
```

- *Type:* interface{}

---

##### `FrontendEndpointId`<sup>Required</sup> <a name="FrontendEndpointId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointId"></a>

```go
func FrontendEndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorCustomHttpsConfigurationConfig <a name="FrontdoorCustomHttpsConfigurationConfig" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

&frontdoorcustomhttpsconfiguration.FrontdoorCustomHttpsConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomHttpsProvisioningEnabled: interface{},
	FrontendEndpointId: *string,
	CustomHttpsConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsProvisioningEnabled">CustomHttpsProvisioningEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.frontendEndpointId">FrontendEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsConfiguration">CustomHttpsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | custom_https_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomHttpsProvisioningEnabled`<sup>Required</sup> <a name="CustomHttpsProvisioningEnabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsProvisioningEnabled"></a>

```go
CustomHttpsProvisioningEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}.

---

##### `FrontendEndpointId`<sup>Required</sup> <a name="FrontendEndpointId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.frontendEndpointId"></a>

```go
FrontendEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}.

---

##### `CustomHttpsConfiguration`<sup>Optional</sup> <a name="CustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsConfiguration"></a>

```go
CustomHttpsConfiguration FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

custom_https_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.timeouts"></a>

```go
Timeouts FrontdoorCustomHttpsConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#timeouts FrontdoorCustomHttpsConfiguration#timeouts}

---

### FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration <a name="FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

&frontdoorcustomhttpsconfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration {
	AzureKeyVaultCertificateSecretName: *string,
	AzureKeyVaultCertificateSecretVersion: *string,
	AzureKeyVaultCertificateVaultId: *string,
	CertificateSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretName">AzureKeyVaultCertificateSecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretVersion">AzureKeyVaultCertificateSecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateVaultId">AzureKeyVaultCertificateVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}. |

---

##### `AzureKeyVaultCertificateSecretName`<sup>Optional</sup> <a name="AzureKeyVaultCertificateSecretName" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretName"></a>

```go
AzureKeyVaultCertificateSecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}.

---

##### `AzureKeyVaultCertificateSecretVersion`<sup>Optional</sup> <a name="AzureKeyVaultCertificateSecretVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretVersion"></a>

```go
AzureKeyVaultCertificateSecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}.

---

##### `AzureKeyVaultCertificateVaultId`<sup>Optional</sup> <a name="AzureKeyVaultCertificateVaultId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateVaultId"></a>

```go
AzureKeyVaultCertificateVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}.

---

##### `CertificateSource`<sup>Optional</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.certificateSource"></a>

```go
CertificateSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}.

---

### FrontdoorCustomHttpsConfigurationTimeouts <a name="FrontdoorCustomHttpsConfigurationTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

&frontdoorcustomhttpsconfiguration.FrontdoorCustomHttpsConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference <a name="FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

frontdoorcustomhttpsconfiguration.NewFrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretName">ResetAzureKeyVaultCertificateSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretVersion">ResetAzureKeyVaultCertificateSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateVaultId">ResetAzureKeyVaultCertificateVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetCertificateSource">ResetCertificateSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureKeyVaultCertificateSecretName` <a name="ResetAzureKeyVaultCertificateSecretName" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretName"></a>

```go
func ResetAzureKeyVaultCertificateSecretName()
```

##### `ResetAzureKeyVaultCertificateSecretVersion` <a name="ResetAzureKeyVaultCertificateSecretVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretVersion"></a>

```go
func ResetAzureKeyVaultCertificateSecretVersion()
```

##### `ResetAzureKeyVaultCertificateVaultId` <a name="ResetAzureKeyVaultCertificateVaultId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateVaultId"></a>

```go
func ResetAzureKeyVaultCertificateVaultId()
```

##### `ResetCertificateSource` <a name="ResetCertificateSource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetCertificateSource"></a>

```go
func ResetCertificateSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningState">ProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningSubstate">ProvisioningSubstate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretNameInput">AzureKeyVaultCertificateSecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersionInput">AzureKeyVaultCertificateSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultIdInput">AzureKeyVaultCertificateVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSourceInput">CertificateSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretName">AzureKeyVaultCertificateSecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersion">AzureKeyVaultCertificateSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultId">AzureKeyVaultCertificateVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `ProvisioningState`<sup>Required</sup> <a name="ProvisioningState" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningState"></a>

```go
func ProvisioningState() *string
```

- *Type:* *string

---

##### `ProvisioningSubstate`<sup>Required</sup> <a name="ProvisioningSubstate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningSubstate"></a>

```go
func ProvisioningSubstate() *string
```

- *Type:* *string

---

##### `AzureKeyVaultCertificateSecretNameInput`<sup>Optional</sup> <a name="AzureKeyVaultCertificateSecretNameInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretNameInput"></a>

```go
func AzureKeyVaultCertificateSecretNameInput() *string
```

- *Type:* *string

---

##### `AzureKeyVaultCertificateSecretVersionInput`<sup>Optional</sup> <a name="AzureKeyVaultCertificateSecretVersionInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersionInput"></a>

```go
func AzureKeyVaultCertificateSecretVersionInput() *string
```

- *Type:* *string

---

##### `AzureKeyVaultCertificateVaultIdInput`<sup>Optional</sup> <a name="AzureKeyVaultCertificateVaultIdInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultIdInput"></a>

```go
func AzureKeyVaultCertificateVaultIdInput() *string
```

- *Type:* *string

---

##### `CertificateSourceInput`<sup>Optional</sup> <a name="CertificateSourceInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSourceInput"></a>

```go
func CertificateSourceInput() *string
```

- *Type:* *string

---

##### `AzureKeyVaultCertificateSecretName`<sup>Required</sup> <a name="AzureKeyVaultCertificateSecretName" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretName"></a>

```go
func AzureKeyVaultCertificateSecretName() *string
```

- *Type:* *string

---

##### `AzureKeyVaultCertificateSecretVersion`<sup>Required</sup> <a name="AzureKeyVaultCertificateSecretVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersion"></a>

```go
func AzureKeyVaultCertificateSecretVersion() *string
```

- *Type:* *string

---

##### `AzureKeyVaultCertificateVaultId`<sup>Required</sup> <a name="AzureKeyVaultCertificateVaultId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultId"></a>

```go
func AzureKeyVaultCertificateVaultId() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---


### FrontdoorCustomHttpsConfigurationTimeoutsOutputReference <a name="FrontdoorCustomHttpsConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/frontdoorcustomhttpsconfiguration"

frontdoorcustomhttpsconfiguration.NewFrontdoorCustomHttpsConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorCustomHttpsConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



