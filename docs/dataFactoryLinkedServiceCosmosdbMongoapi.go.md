# `azurerm_data_factory_linked_service_cosmosdb_mongoapi`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_service_cosmosdb_mongoapi`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi).

# `dataFactoryLinkedServiceCosmosdbMongoapi` Submodule <a name="`dataFactoryLinkedServiceCosmosdbMongoapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapi <a name="DataFactoryLinkedServiceCosmosdbMongoapi" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi azurerm_data_factory_linked_service_cosmosdb_mongoapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

datafactorylinkedservicecosmosdbmongoapi.NewDataFactoryLinkedServiceCosmosdbMongoapi(scope Construct, id *string, config DataFactoryLinkedServiceCosmosdbMongoapiConfig) DataFactoryLinkedServiceCosmosdbMongoapi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig">DataFactoryLinkedServiceCosmosdbMongoapiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig">DataFactoryLinkedServiceCosmosdbMongoapiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher">ResetServerVersionIs32OrHigher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryLinkedServiceCosmosdbMongoapiTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName"></a>

```go
func ResetIntegrationRuntimeName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetServerVersionIs32OrHigher` <a name="ResetServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher"></a>

```go
func ResetServerVersionIs32OrHigher()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

datafactorylinkedservicecosmosdbmongoapi.DataFactoryLinkedServiceCosmosdbMongoapi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

datafactorylinkedservicecosmosdbmongoapi.DataFactoryLinkedServiceCosmosdbMongoapi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

datafactorylinkedservicecosmosdbmongoapi.DataFactoryLinkedServiceCosmosdbMongoapi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput">ServerVersionIs32OrHigherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher">ServerVersionIs32OrHigher</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts"></a>

```go
func Timeouts() DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput"></a>

```go
func IntegrationRuntimeNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServerVersionIs32OrHigherInput`<sup>Optional</sup> <a name="ServerVersionIs32OrHigherInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput"></a>

```go
func ServerVersionIs32OrHigherInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties"></a>

```go
func AdditionalProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName"></a>

```go
func IntegrationRuntimeName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ServerVersionIs32OrHigher`<sup>Required</sup> <a name="ServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher"></a>

```go
func ServerVersionIs32OrHigher() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiConfig <a name="DataFactoryLinkedServiceCosmosdbMongoapiConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

&datafactorylinkedservicecosmosdbmongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	AdditionalProperties: *map[string]*string,
	Annotations: *[]*string,
	ConnectionString: *string,
	Database: *string,
	Description: *string,
	Id: *string,
	IntegrationRuntimeName: *string,
	Parameters: *map[string]*string,
	ServerVersionIs32OrHigher: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher">ServerVersionIs32OrHigher</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties"></a>

```go
AdditionalProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName"></a>

```go
IntegrationRuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}.

---

##### `ServerVersionIs32OrHigher`<sup>Optional</sup> <a name="ServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher"></a>

```go
ServerVersionIs32OrHigher interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts"></a>

```go
Timeouts DataFactoryLinkedServiceCosmosdbMongoapiTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#timeouts DataFactoryLinkedServiceCosmosdbMongoapi#timeouts}

---

### DataFactoryLinkedServiceCosmosdbMongoapiTimeouts <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

&datafactorylinkedservicecosmosdbmongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/datafactorylinkedservicecosmosdbmongoapi"

datafactorylinkedservicecosmosdbmongoapi.NewDataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



