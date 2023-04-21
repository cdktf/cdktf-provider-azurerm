# `azurerm_data_factory_integration_runtime_azure`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_integration_runtime_azure`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure).

# `dataFactoryIntegrationRuntimeAzure` Submodule <a name="`dataFactoryIntegrationRuntimeAzure` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeAzure <a name="DataFactoryIntegrationRuntimeAzure" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure azurerm_data_factory_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.NewDataFactoryIntegrationRuntimeAzure(scope Construct, id *string, config DataFactoryIntegrationRuntimeAzureConfig) DataFactoryIntegrationRuntimeAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig">DataFactoryIntegrationRuntimeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled">ResetCleanupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin">ResetTimeToLiveMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled">ResetVirtualNetworkEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryIntegrationRuntimeAzureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

---

##### `ResetCleanupEnabled` <a name="ResetCleanupEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCleanupEnabled"></a>

```go
func ResetCleanupEnabled()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetComputeType"></a>

```go
func ResetComputeType()
```

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetCoreCount"></a>

```go
func ResetCoreCount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeToLiveMin` <a name="ResetTimeToLiveMin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```go
func ResetTimeToLiveMin()
```

##### `ResetVirtualNetworkEnabled` <a name="ResetVirtualNetworkEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.resetVirtualNetworkEnabled"></a>

```go
func ResetVirtualNetworkEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput">CleanupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput">ComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput">CoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput">TimeToLiveMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput">VirtualNetworkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled">CleanupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled">VirtualNetworkEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeouts"></a>

```go
func Timeouts() DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `CleanupEnabledInput`<sup>Optional</sup> <a name="CleanupEnabledInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabledInput"></a>

```go
func CleanupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeTypeInput"></a>

```go
func ComputeTypeInput() *string
```

- *Type:* *string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCountInput"></a>

```go
func CoreCountInput() *f64
```

- *Type:* *f64

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeToLiveMinInput`<sup>Optional</sup> <a name="TimeToLiveMinInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```go
func TimeToLiveMinInput() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkEnabledInput`<sup>Optional</sup> <a name="VirtualNetworkEnabledInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabledInput"></a>

```go
func VirtualNetworkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CleanupEnabled`<sup>Required</sup> <a name="CleanupEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.cleanupEnabled"></a>

```go
func CleanupEnabled() interface{}
```

- *Type:* interface{}

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeToLiveMin`<sup>Required</sup> <a name="TimeToLiveMin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```go
func TimeToLiveMin() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkEnabled`<sup>Required</sup> <a name="VirtualNetworkEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.virtualNetworkEnabled"></a>

```go
func VirtualNetworkEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeAzureConfig <a name="DataFactoryIntegrationRuntimeAzureConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

&datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Location: *string,
	Name: *string,
	CleanupEnabled: interface{},
	ComputeType: *string,
	CoreCount: *f64,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts,
	TimeToLiveMin: *f64,
	VirtualNetworkEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled">CleanupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType">ComputeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount">CoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled">VirtualNetworkEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#data_factory_id DataFactoryIntegrationRuntimeAzure#data_factory_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#location DataFactoryIntegrationRuntimeAzure#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#name DataFactoryIntegrationRuntimeAzure#name}.

---

##### `CleanupEnabled`<sup>Optional</sup> <a name="CleanupEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.cleanupEnabled"></a>

```go
CleanupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#cleanup_enabled DataFactoryIntegrationRuntimeAzure#cleanup_enabled}.

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.computeType"></a>

```go
ComputeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#compute_type DataFactoryIntegrationRuntimeAzure#compute_type}.

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.coreCount"></a>

```go
CoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#core_count DataFactoryIntegrationRuntimeAzure#core_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#description DataFactoryIntegrationRuntimeAzure#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#id DataFactoryIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeouts"></a>

```go
Timeouts DataFactoryIntegrationRuntimeAzureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts">DataFactoryIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#timeouts DataFactoryIntegrationRuntimeAzure#timeouts}

---

##### `TimeToLiveMin`<sup>Optional</sup> <a name="TimeToLiveMin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```go
TimeToLiveMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#time_to_live_min DataFactoryIntegrationRuntimeAzure#time_to_live_min}.

---

##### `VirtualNetworkEnabled`<sup>Optional</sup> <a name="VirtualNetworkEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureConfig.property.virtualNetworkEnabled"></a>

```go
VirtualNetworkEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#virtual_network_enabled DataFactoryIntegrationRuntimeAzure#virtual_network_enabled}.

---

### DataFactoryIntegrationRuntimeAzureTimeouts <a name="DataFactoryIntegrationRuntimeAzureTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

&datafactoryintegrationruntimeazure.DataFactoryIntegrationRuntimeAzureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#create DataFactoryIntegrationRuntimeAzure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#delete DataFactoryIntegrationRuntimeAzure#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#read DataFactoryIntegrationRuntimeAzure#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/data_factory_integration_runtime_azure#update DataFactoryIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimeazure"

datafactoryintegrationruntimeazure.NewDataFactoryIntegrationRuntimeAzureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzure.DataFactoryIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



