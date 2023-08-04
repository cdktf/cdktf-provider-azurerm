# `data_azurerm_storage_account_blob_container_sas`

Refer to the Terraform Registory for docs: [`data_azurerm_storage_account_blob_container_sas`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas).

# `dataAzurermStorageAccountBlobContainerSas` Submodule <a name="`dataAzurermStorageAccountBlobContainerSas` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountBlobContainerSas <a name="DataAzurermStorageAccountBlobContainerSas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

dataazurermstorageaccountblobcontainersas.NewDataAzurermStorageAccountBlobContainerSas(scope Construct, id *string, config DataAzurermStorageAccountBlobContainerSasConfig) DataAzurermStorageAccountBlobContainerSas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig">DataAzurermStorageAccountBlobContainerSasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig">DataAzurermStorageAccountBlobContainerSasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions"></a>

```go
func PutPermissions(value DataAzurermStorageAccountBlobContainerSasPermissions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermStorageAccountBlobContainerSasTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetHttpsOnly"></a>

```go
func ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

dataazurermstorageaccountblobcontainersas.DataAzurermStorageAccountBlobContainerSas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

dataazurermstorageaccountblobcontainersas.DataAzurermStorageAccountBlobContainerSas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

dataazurermstorageaccountblobcontainersas.DataAzurermStorageAccountBlobContainerSas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference">DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.sas">Sas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference">DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiryInput">ExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.start">Start</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissions"></a>

```go
func Permissions() DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference">DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference</a>

---

##### `Sas`<sup>Required</sup> <a name="Sas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.sas"></a>

```go
func Sas() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeouts"></a>

```go
func Timeouts() DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference">DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference</a>

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiryInput"></a>

```go
func ExpiryInput() *string
```

- *Type:* *string

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnlyInput"></a>

```go
func HttpsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissionsInput"></a>

```go
func PermissionsInput() DataAzurermStorageAccountBlobContainerSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnly"></a>

```go
func HttpsOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountBlobContainerSasConfig <a name="DataAzurermStorageAccountBlobContainerSasConfig" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

&dataazurermstorageaccountblobcontainersas.DataAzurermStorageAccountBlobContainerSasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionString: *string,
	ContainerName: *string,
	Expiry: *string,
	Permissions: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions,
	Start: *string,
	CacheControl: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	HttpsOnly: interface{},
	Id: *string,
	IpAddress: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.expiry">Expiry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}.

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.expiry"></a>

```go
Expiry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}.

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.permissions"></a>

```go
Permissions DataAzurermStorageAccountBlobContainerSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.httpsOnly"></a>

```go
HttpsOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.timeouts"></a>

```go
Timeouts DataAzurermStorageAccountBlobContainerSasTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#timeouts DataAzurermStorageAccountBlobContainerSas#timeouts}

---

### DataAzurermStorageAccountBlobContainerSasPermissions <a name="DataAzurermStorageAccountBlobContainerSasPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

&dataazurermstorageaccountblobcontainersas.DataAzurermStorageAccountBlobContainerSasPermissions {
	Add: interface{},
	Create: interface{},
	Delete: interface{},
	List: interface{},
	Read: interface{},
	Write: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.add">Add</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.create">Create</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.delete">Delete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.list">List</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.read">Read</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.write">Write</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}. |

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.add"></a>

```go
Add interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}.

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.create"></a>

```go
Create interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}.

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}.

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.list"></a>

```go
List interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.read"></a>

```go
Read interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.write"></a>

```go
Write interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}.

---

### DataAzurermStorageAccountBlobContainerSasTimeouts <a name="DataAzurermStorageAccountBlobContainerSasTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

&dataazurermstorageaccountblobcontainersas.DataAzurermStorageAccountBlobContainerSasTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference <a name="DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

dataazurermstorageaccountblobcontainersas.NewDataAzurermStorageAccountBlobContainerSasPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.addInput">AddInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.createInput">CreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.listInput">ListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.readInput">ReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.writeInput">WriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.add">Add</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.create">Create</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.list">List</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.read">Read</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.write">Write</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.addInput"></a>

```go
func AddInput() interface{}
```

- *Type:* interface{}

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.createInput"></a>

```go
func CreateInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.listInput"></a>

```go
func ListInput() interface{}
```

- *Type:* interface{}

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.readInput"></a>

```go
func ReadInput() interface{}
```

- *Type:* interface{}

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.writeInput"></a>

```go
func WriteInput() interface{}
```

- *Type:* interface{}

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.add"></a>

```go
func Add() interface{}
```

- *Type:* interface{}

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.create"></a>

```go
func Create() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.list"></a>

```go
func List() interface{}
```

- *Type:* interface{}

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.read"></a>

```go
func Read() interface{}
```

- *Type:* interface{}

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.write"></a>

```go
func Write() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermStorageAccountBlobContainerSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---


### DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference <a name="DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstorageaccountblobcontainersas"

dataazurermstorageaccountblobcontainersas.NewDataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



