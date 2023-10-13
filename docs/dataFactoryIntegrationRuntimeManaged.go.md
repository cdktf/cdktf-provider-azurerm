# `azurerm_data_factory_integration_runtime_managed`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_integration_runtime_managed`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed).

# `dataFactoryIntegrationRuntimeManaged` Submodule <a name="`dataFactoryIntegrationRuntimeManaged` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeManaged <a name="DataFactoryIntegrationRuntimeManaged" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed azurerm_data_factory_integration_runtime_managed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.NewDataFactoryIntegrationRuntimeManaged(scope Construct, id *string, config DataFactoryIntegrationRuntimeManagedConfig) DataFactoryIntegrationRuntimeManaged
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig">DataFactoryIntegrationRuntimeManagedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig">DataFactoryIntegrationRuntimeManagedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putCatalogInfo">PutCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putCustomSetupScript">PutCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putVnetIntegration">PutVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetCatalogInfo">ResetCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetCustomSetupScript">ResetCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetMaxParallelExecutionsPerNode">ResetMaxParallelExecutionsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetVnetIntegration">ResetVnetIntegration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCatalogInfo` <a name="PutCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putCatalogInfo"></a>

```go
func PutCatalogInfo(value DataFactoryIntegrationRuntimeManagedCatalogInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a>

---

##### `PutCustomSetupScript` <a name="PutCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putCustomSetupScript"></a>

```go
func PutCustomSetupScript(value DataFactoryIntegrationRuntimeManagedCustomSetupScript)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putCustomSetupScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryIntegrationRuntimeManagedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts">DataFactoryIntegrationRuntimeManagedTimeouts</a>

---

##### `PutVnetIntegration` <a name="PutVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putVnetIntegration"></a>

```go
func PutVnetIntegration(value DataFactoryIntegrationRuntimeManagedVnetIntegration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.putVnetIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a>

---

##### `ResetCatalogInfo` <a name="ResetCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetCatalogInfo"></a>

```go
func ResetCatalogInfo()
```

##### `ResetCustomSetupScript` <a name="ResetCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetCustomSetupScript"></a>

```go
func ResetCustomSetupScript()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetMaxParallelExecutionsPerNode` <a name="ResetMaxParallelExecutionsPerNode" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetMaxParallelExecutionsPerNode"></a>

```go
func ResetMaxParallelExecutionsPerNode()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetNumberOfNodes"></a>

```go
func ResetNumberOfNodes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVnetIntegration` <a name="ResetVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.resetVnetIntegration"></a>

```go
func ResetVnetIntegration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManaged_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManaged_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManaged_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference">DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.customSetupScript">CustomSetupScript</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference">DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference">DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.vnetIntegration">VnetIntegration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.catalogInfoInput">CatalogInfoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.customSetupScriptInput">CustomSetupScriptInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.maxParallelExecutionsPerNodeInput">MaxParallelExecutionsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.nodeSizeInput">NodeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.vnetIntegrationInput">VnetIntegrationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.maxParallelExecutionsPerNode">MaxParallelExecutionsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.nodeSize">NodeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogInfo`<sup>Required</sup> <a name="CatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.catalogInfo"></a>

```go
func CatalogInfo() DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference">DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference</a>

---

##### `CustomSetupScript`<sup>Required</sup> <a name="CustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.customSetupScript"></a>

```go
func CustomSetupScript() DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference">DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.timeouts"></a>

```go
func Timeouts() DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference">DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference</a>

---

##### `VnetIntegration`<sup>Required</sup> <a name="VnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.vnetIntegration"></a>

```go
func VnetIntegration() DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference</a>

---

##### `CatalogInfoInput`<sup>Optional</sup> <a name="CatalogInfoInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.catalogInfoInput"></a>

```go
func CatalogInfoInput() DataFactoryIntegrationRuntimeManagedCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a>

---

##### `CustomSetupScriptInput`<sup>Optional</sup> <a name="CustomSetupScriptInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.customSetupScriptInput"></a>

```go
func CustomSetupScriptInput() DataFactoryIntegrationRuntimeManagedCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a>

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxParallelExecutionsPerNodeInput`<sup>Optional</sup> <a name="MaxParallelExecutionsPerNodeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.maxParallelExecutionsPerNodeInput"></a>

```go
func MaxParallelExecutionsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeSizeInput`<sup>Optional</sup> <a name="NodeSizeInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.nodeSizeInput"></a>

```go
func NodeSizeInput() *string
```

- *Type:* *string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.numberOfNodesInput"></a>

```go
func NumberOfNodesInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VnetIntegrationInput`<sup>Optional</sup> <a name="VnetIntegrationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.vnetIntegrationInput"></a>

```go
func VnetIntegrationInput() DataFactoryIntegrationRuntimeManagedVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a>

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxParallelExecutionsPerNode`<sup>Required</sup> <a name="MaxParallelExecutionsPerNode" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.maxParallelExecutionsPerNode"></a>

```go
func MaxParallelExecutionsPerNode() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeSize`<sup>Required</sup> <a name="NodeSize" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.nodeSize"></a>

```go
func NodeSize() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManaged.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeManagedCatalogInfo <a name="DataFactoryIntegrationRuntimeManagedCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

&datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManagedCatalogInfo {
	ServerEndpoint: *string,
	AdministratorLogin: *string,
	AdministratorPassword: *string,
	PricingTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.serverEndpoint">ServerEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#server_endpoint DataFactoryIntegrationRuntimeManaged#server_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#administrator_login DataFactoryIntegrationRuntimeManaged#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.administratorPassword">AdministratorPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#administrator_password DataFactoryIntegrationRuntimeManaged#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.pricingTier">PricingTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#pricing_tier DataFactoryIntegrationRuntimeManaged#pricing_tier}. |

---

##### `ServerEndpoint`<sup>Required</sup> <a name="ServerEndpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.serverEndpoint"></a>

```go
ServerEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#server_endpoint DataFactoryIntegrationRuntimeManaged#server_endpoint}.

---

##### `AdministratorLogin`<sup>Optional</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#administrator_login DataFactoryIntegrationRuntimeManaged#administrator_login}.

---

##### `AdministratorPassword`<sup>Optional</sup> <a name="AdministratorPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.administratorPassword"></a>

```go
AdministratorPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#administrator_password DataFactoryIntegrationRuntimeManaged#administrator_password}.

---

##### `PricingTier`<sup>Optional</sup> <a name="PricingTier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo.property.pricingTier"></a>

```go
PricingTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#pricing_tier DataFactoryIntegrationRuntimeManaged#pricing_tier}.

---

### DataFactoryIntegrationRuntimeManagedConfig <a name="DataFactoryIntegrationRuntimeManagedConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

&datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManagedConfig {
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
	NodeSize: *string,
	CatalogInfo: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo,
	CustomSetupScript: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript,
	Description: *string,
	Edition: *string,
	Id: *string,
	LicenseType: *string,
	MaxParallelExecutionsPerNode: *f64,
	NumberOfNodes: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts,
	VnetIntegration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#data_factory_id DataFactoryIntegrationRuntimeManaged#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#location DataFactoryIntegrationRuntimeManaged#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#name DataFactoryIntegrationRuntimeManaged#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.nodeSize">NodeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#node_size DataFactoryIntegrationRuntimeManaged#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.customSetupScript">CustomSetupScript</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a></code> | custom_setup_script block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#description DataFactoryIntegrationRuntimeManaged#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#edition DataFactoryIntegrationRuntimeManaged#edition}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#id DataFactoryIntegrationRuntimeManaged#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#license_type DataFactoryIntegrationRuntimeManaged#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.maxParallelExecutionsPerNode">MaxParallelExecutionsPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#max_parallel_executions_per_node DataFactoryIntegrationRuntimeManaged#max_parallel_executions_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#number_of_nodes DataFactoryIntegrationRuntimeManaged#number_of_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts">DataFactoryIntegrationRuntimeManagedTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.vnetIntegration">VnetIntegration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a></code> | vnet_integration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#data_factory_id DataFactoryIntegrationRuntimeManaged#data_factory_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#location DataFactoryIntegrationRuntimeManaged#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#name DataFactoryIntegrationRuntimeManaged#name}.

---

##### `NodeSize`<sup>Required</sup> <a name="NodeSize" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.nodeSize"></a>

```go
NodeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#node_size DataFactoryIntegrationRuntimeManaged#node_size}.

---

##### `CatalogInfo`<sup>Optional</sup> <a name="CatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.catalogInfo"></a>

```go
CatalogInfo DataFactoryIntegrationRuntimeManagedCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#catalog_info DataFactoryIntegrationRuntimeManaged#catalog_info}

---

##### `CustomSetupScript`<sup>Optional</sup> <a name="CustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.customSetupScript"></a>

```go
CustomSetupScript DataFactoryIntegrationRuntimeManagedCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a>

custom_setup_script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#custom_setup_script DataFactoryIntegrationRuntimeManaged#custom_setup_script}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#description DataFactoryIntegrationRuntimeManaged#description}.

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#edition DataFactoryIntegrationRuntimeManaged#edition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#id DataFactoryIntegrationRuntimeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#license_type DataFactoryIntegrationRuntimeManaged#license_type}.

---

##### `MaxParallelExecutionsPerNode`<sup>Optional</sup> <a name="MaxParallelExecutionsPerNode" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.maxParallelExecutionsPerNode"></a>

```go
MaxParallelExecutionsPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#max_parallel_executions_per_node DataFactoryIntegrationRuntimeManaged#max_parallel_executions_per_node}.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.numberOfNodes"></a>

```go
NumberOfNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#number_of_nodes DataFactoryIntegrationRuntimeManaged#number_of_nodes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.timeouts"></a>

```go
Timeouts DataFactoryIntegrationRuntimeManagedTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts">DataFactoryIntegrationRuntimeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#timeouts DataFactoryIntegrationRuntimeManaged#timeouts}

---

##### `VnetIntegration`<sup>Optional</sup> <a name="VnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedConfig.property.vnetIntegration"></a>

```go
VnetIntegration DataFactoryIntegrationRuntimeManagedVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a>

vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#vnet_integration DataFactoryIntegrationRuntimeManaged#vnet_integration}

---

### DataFactoryIntegrationRuntimeManagedCustomSetupScript <a name="DataFactoryIntegrationRuntimeManagedCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

&datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript {
	BlobContainerUri: *string,
	SasToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript.property.blobContainerUri">BlobContainerUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#blob_container_uri DataFactoryIntegrationRuntimeManaged#blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript.property.sasToken">SasToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#sas_token DataFactoryIntegrationRuntimeManaged#sas_token}. |

---

##### `BlobContainerUri`<sup>Required</sup> <a name="BlobContainerUri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript.property.blobContainerUri"></a>

```go
BlobContainerUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#blob_container_uri DataFactoryIntegrationRuntimeManaged#blob_container_uri}.

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript.property.sasToken"></a>

```go
SasToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#sas_token DataFactoryIntegrationRuntimeManaged#sas_token}.

---

### DataFactoryIntegrationRuntimeManagedTimeouts <a name="DataFactoryIntegrationRuntimeManagedTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

&datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManagedTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#create DataFactoryIntegrationRuntimeManaged#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#delete DataFactoryIntegrationRuntimeManaged#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#read DataFactoryIntegrationRuntimeManaged#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#update DataFactoryIntegrationRuntimeManaged#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#create DataFactoryIntegrationRuntimeManaged#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#delete DataFactoryIntegrationRuntimeManaged#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#read DataFactoryIntegrationRuntimeManaged#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#update DataFactoryIntegrationRuntimeManaged#update}.

---

### DataFactoryIntegrationRuntimeManagedVnetIntegration <a name="DataFactoryIntegrationRuntimeManagedVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

&datafactoryintegrationruntimemanaged.DataFactoryIntegrationRuntimeManagedVnetIntegration {
	SubnetName: *string,
	VnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration.property.subnetName">SubnetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#subnet_name DataFactoryIntegrationRuntimeManaged#subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration.property.vnetId">VnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#vnet_id DataFactoryIntegrationRuntimeManaged#vnet_id}. |

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration.property.subnetName"></a>

```go
SubnetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#subnet_name DataFactoryIntegrationRuntimeManaged#subnet_name}.

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration.property.vnetId"></a>

```go
VnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_integration_runtime_managed#vnet_id DataFactoryIntegrationRuntimeManaged#vnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference <a name="DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.NewDataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resetAdministratorLogin">ResetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resetAdministratorPassword">ResetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resetPricingTier">ResetPricingTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdministratorLogin` <a name="ResetAdministratorLogin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resetAdministratorLogin"></a>

```go
func ResetAdministratorLogin()
```

##### `ResetAdministratorPassword` <a name="ResetAdministratorPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resetAdministratorPassword"></a>

```go
func ResetAdministratorPassword()
```

##### `ResetPricingTier` <a name="ResetPricingTier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.resetPricingTier"></a>

```go
func ResetPricingTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorPasswordInput">AdministratorPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.pricingTierInput">PricingTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.serverEndpointInput">ServerEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorPassword">AdministratorPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.pricingTier">PricingTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.serverEndpoint">ServerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorPasswordInput`<sup>Optional</sup> <a name="AdministratorPasswordInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorPasswordInput"></a>

```go
func AdministratorPasswordInput() *string
```

- *Type:* *string

---

##### `PricingTierInput`<sup>Optional</sup> <a name="PricingTierInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.pricingTierInput"></a>

```go
func PricingTierInput() *string
```

- *Type:* *string

---

##### `ServerEndpointInput`<sup>Optional</sup> <a name="ServerEndpointInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.serverEndpointInput"></a>

```go
func ServerEndpointInput() *string
```

- *Type:* *string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorPassword`<sup>Required</sup> <a name="AdministratorPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.administratorPassword"></a>

```go
func AdministratorPassword() *string
```

- *Type:* *string

---

##### `PricingTier`<sup>Required</sup> <a name="PricingTier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.pricingTier"></a>

```go
func PricingTier() *string
```

- *Type:* *string

---

##### `ServerEndpoint`<sup>Required</sup> <a name="ServerEndpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.serverEndpoint"></a>

```go
func ServerEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeManagedCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCatalogInfo">DataFactoryIntegrationRuntimeManagedCatalogInfo</a>

---


### DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference <a name="DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.NewDataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.blobContainerUriInput">BlobContainerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.blobContainerUri">BlobContainerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.sasToken">SasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlobContainerUriInput`<sup>Optional</sup> <a name="BlobContainerUriInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.blobContainerUriInput"></a>

```go
func BlobContainerUriInput() *string
```

- *Type:* *string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.sasTokenInput"></a>

```go
func SasTokenInput() *string
```

- *Type:* *string

---

##### `BlobContainerUri`<sup>Required</sup> <a name="BlobContainerUri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.blobContainerUri"></a>

```go
func BlobContainerUri() *string
```

- *Type:* *string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.sasToken"></a>

```go
func SasToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeManagedCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedCustomSetupScript">DataFactoryIntegrationRuntimeManagedCustomSetupScript</a>

---


### DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.NewDataFactoryIntegrationRuntimeManagedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference <a name="DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactoryintegrationruntimemanaged"

datafactoryintegrationruntimemanaged.NewDataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.vnetIdInput">VnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.vnetId">VnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.subnetNameInput"></a>

```go
func SubnetNameInput() *string
```

- *Type:* *string

---

##### `VnetIdInput`<sup>Optional</sup> <a name="VnetIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.vnetIdInput"></a>

```go
func VnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.vnetId"></a>

```go
func VnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryIntegrationRuntimeManagedVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeManaged.DataFactoryIntegrationRuntimeManagedVnetIntegration">DataFactoryIntegrationRuntimeManagedVnetIntegration</a>

---



