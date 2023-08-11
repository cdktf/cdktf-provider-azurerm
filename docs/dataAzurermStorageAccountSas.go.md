# `data_azurerm_storage_account_sas`

Refer to the Terraform Registory for docs: [`data_azurerm_storage_account_sas`](https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas).

# `dataAzurermStorageAccountSas` Submodule <a name="`dataAzurermStorageAccountSas` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountSas <a name="DataAzurermStorageAccountSas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas azurerm_storage_account_sas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.NewDataAzurermStorageAccountSas(scope Construct, id *string, config DataAzurermStorageAccountSasConfig) DataAzurermStorageAccountSas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig">DataAzurermStorageAccountSasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig">DataAzurermStorageAccountSasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes">PutResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices">PutServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetSignedVersion">ResetSignedVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions"></a>

```go
func PutPermissions(value DataAzurermStorageAccountSasPermissions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---

##### `PutResourceTypes` <a name="PutResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes"></a>

```go
func PutResourceTypes(value DataAzurermStorageAccountSasResourceTypes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---

##### `PutServices` <a name="PutServices" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices"></a>

```go
func PutServices(value DataAzurermStorageAccountSasServices)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermStorageAccountSasTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

---

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetHttpsOnly"></a>

```go
func ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetSignedVersion` <a name="ResetSignedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetSignedVersion"></a>

```go
func ResetSignedVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.DataAzurermStorageAccountSas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.DataAzurermStorageAccountSas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.DataAzurermStorageAccountSas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference">DataAzurermStorageAccountSasPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypes">ResourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference">DataAzurermStorageAccountSasResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.sas">Sas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.services">Services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference">DataAzurermStorageAccountSasServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference">DataAzurermStorageAccountSasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiryInput">ExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypesInput">ResourceTypesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.servicesInput">ServicesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersionInput">SignedVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddresses">IpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersion">SignedVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.start">Start</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissions"></a>

```go
func Permissions() DataAzurermStorageAccountSasPermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference">DataAzurermStorageAccountSasPermissionsOutputReference</a>

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypes"></a>

```go
func ResourceTypes() DataAzurermStorageAccountSasResourceTypesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference">DataAzurermStorageAccountSasResourceTypesOutputReference</a>

---

##### `Sas`<sup>Required</sup> <a name="Sas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.sas"></a>

```go
func Sas() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.services"></a>

```go
func Services() DataAzurermStorageAccountSasServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference">DataAzurermStorageAccountSasServicesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeouts"></a>

```go
func Timeouts() DataAzurermStorageAccountSasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference">DataAzurermStorageAccountSasTimeoutsOutputReference</a>

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiryInput"></a>

```go
func ExpiryInput() *string
```

- *Type:* *string

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnlyInput"></a>

```go
func HttpsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissionsInput"></a>

```go
func PermissionsInput() DataAzurermStorageAccountSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() DataAzurermStorageAccountSasResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.servicesInput"></a>

```go
func ServicesInput() DataAzurermStorageAccountSasServices
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---

##### `SignedVersionInput`<sup>Optional</sup> <a name="SignedVersionInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersionInput"></a>

```go
func SignedVersionInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnly"></a>

```go
func HttpsOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddresses"></a>

```go
func IpAddresses() *string
```

- *Type:* *string

---

##### `SignedVersion`<sup>Required</sup> <a name="SignedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersion"></a>

```go
func SignedVersion() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountSasConfig <a name="DataAzurermStorageAccountSasConfig" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

&dataazurermstorageaccountsas.DataAzurermStorageAccountSasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionString: *string,
	Expiry: *string,
	Permissions: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions,
	ResourceTypes: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes,
	Services: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices,
	Start: *string,
	HttpsOnly: interface{},
	Id: *string,
	IpAddresses: *string,
	SignedVersion: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.expiry">Expiry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.resourceTypes">ResourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | resource_types block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.services">Services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | services block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.ipAddresses">IpAddresses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.signedVersion">SignedVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}.

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.expiry"></a>

```go
Expiry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}.

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.permissions"></a>

```go
Permissions DataAzurermStorageAccountSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#permissions DataAzurermStorageAccountSas#permissions}

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.resourceTypes"></a>

```go
ResourceTypes DataAzurermStorageAccountSasResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

resource_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#resource_types DataAzurermStorageAccountSas#resource_types}

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.services"></a>

```go
Services DataAzurermStorageAccountSasServices
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#services DataAzurermStorageAccountSas#services}

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.httpsOnly"></a>

```go
HttpsOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.ipAddresses"></a>

```go
IpAddresses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}.

---

##### `SignedVersion`<sup>Optional</sup> <a name="SignedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.signedVersion"></a>

```go
SignedVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.timeouts"></a>

```go
Timeouts DataAzurermStorageAccountSasTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#timeouts DataAzurermStorageAccountSas#timeouts}

---

### DataAzurermStorageAccountSasPermissions <a name="DataAzurermStorageAccountSasPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

&dataazurermstorageaccountsas.DataAzurermStorageAccountSasPermissions {
	Add: interface{},
	Create: interface{},
	Delete: interface{},
	Filter: interface{},
	List: interface{},
	Process: interface{},
	Read: interface{},
	Tag: interface{},
	Update: interface{},
	Write: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.add">Add</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.create">Create</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.delete">Delete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.filter">Filter</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.list">List</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.process">Process</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.read">Read</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.tag">Tag</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.update">Update</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.write">Write</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}. |

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.add"></a>

```go
Add interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}.

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.create"></a>

```go
Create interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}.

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}.

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}.

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.list"></a>

```go
List interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}.

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.process"></a>

```go
Process interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.read"></a>

```go
Read interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.tag"></a>

```go
Tag interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}.

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.write"></a>

```go
Write interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}.

---

### DataAzurermStorageAccountSasResourceTypes <a name="DataAzurermStorageAccountSasResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

&dataazurermstorageaccountsas.DataAzurermStorageAccountSasResourceTypes {
	Container: interface{},
	Object: interface{},
	Service: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.container">Container</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.object">Object</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.service">Service</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.container"></a>

```go
Container interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.object"></a>

```go
Object interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.service"></a>

```go
Service interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}.

---

### DataAzurermStorageAccountSasServices <a name="DataAzurermStorageAccountSasServices" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

&dataazurermstorageaccountsas.DataAzurermStorageAccountSasServices {
	Blob: interface{},
	File: interface{},
	Queue: interface{},
	Table: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.blob">Blob</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.file">File</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.queue">Queue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.table">Table</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}. |

---

##### `Blob`<sup>Required</sup> <a name="Blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.blob"></a>

```go
Blob interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}.

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.file"></a>

```go
File interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}.

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.queue"></a>

```go
Queue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}.

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.table"></a>

```go
Table interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}.

---

### DataAzurermStorageAccountSasTimeouts <a name="DataAzurermStorageAccountSasTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

&dataazurermstorageaccountsas.DataAzurermStorageAccountSasTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountSasPermissionsOutputReference <a name="DataAzurermStorageAccountSasPermissionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.NewDataAzurermStorageAccountSasPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageAccountSasPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.addInput">AddInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.createInput">CreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.listInput">ListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.processInput">ProcessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.readInput">ReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.writeInput">WriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.add">Add</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.create">Create</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filter">Filter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.list">List</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.process">Process</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.read">Read</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tag">Tag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.write">Write</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.addInput"></a>

```go
func AddInput() interface{}
```

- *Type:* interface{}

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.createInput"></a>

```go
func CreateInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.listInput"></a>

```go
func ListInput() interface{}
```

- *Type:* interface{}

---

##### `ProcessInput`<sup>Optional</sup> <a name="ProcessInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.processInput"></a>

```go
func ProcessInput() interface{}
```

- *Type:* interface{}

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.readInput"></a>

```go
func ReadInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.writeInput"></a>

```go
func WriteInput() interface{}
```

- *Type:* interface{}

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.add"></a>

```go
func Add() interface{}
```

- *Type:* interface{}

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.create"></a>

```go
func Create() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filter"></a>

```go
func Filter() interface{}
```

- *Type:* interface{}

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.list"></a>

```go
func List() interface{}
```

- *Type:* interface{}

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.process"></a>

```go
func Process() interface{}
```

- *Type:* interface{}

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.read"></a>

```go
func Read() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tag"></a>

```go
func Tag() interface{}
```

- *Type:* interface{}

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.write"></a>

```go
func Write() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermStorageAccountSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---


### DataAzurermStorageAccountSasResourceTypesOutputReference <a name="DataAzurermStorageAccountSasResourceTypesOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.NewDataAzurermStorageAccountSasResourceTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageAccountSasResourceTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.containerInput">ContainerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.objectInput">ObjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.serviceInput">ServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.container">Container</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.object">Object</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.service">Service</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.containerInput"></a>

```go
func ContainerInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.objectInput"></a>

```go
func ObjectInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.serviceInput"></a>

```go
func ServiceInput() interface{}
```

- *Type:* interface{}

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.container"></a>

```go
func Container() interface{}
```

- *Type:* interface{}

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.object"></a>

```go
func Object() interface{}
```

- *Type:* interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.service"></a>

```go
func Service() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermStorageAccountSasResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---


### DataAzurermStorageAccountSasServicesOutputReference <a name="DataAzurermStorageAccountSasServicesOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.NewDataAzurermStorageAccountSasServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageAccountSasServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blobInput">BlobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fileInput">FileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queueInput">QueueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.tableInput">TableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blob">Blob</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.file">File</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queue">Queue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.table">Table</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlobInput`<sup>Optional</sup> <a name="BlobInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blobInput"></a>

```go
func BlobInput() interface{}
```

- *Type:* interface{}

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fileInput"></a>

```go
func FileInput() interface{}
```

- *Type:* interface{}

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queueInput"></a>

```go
func QueueInput() interface{}
```

- *Type:* interface{}

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.tableInput"></a>

```go
func TableInput() interface{}
```

- *Type:* interface{}

---

##### `Blob`<sup>Required</sup> <a name="Blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blob"></a>

```go
func Blob() interface{}
```

- *Type:* interface{}

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.file"></a>

```go
func File() interface{}
```

- *Type:* interface{}

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queue"></a>

```go
func Queue() interface{}
```

- *Type:* interface{}

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.table"></a>

```go
func Table() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermStorageAccountSasServices
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---


### DataAzurermStorageAccountSasTimeoutsOutputReference <a name="DataAzurermStorageAccountSasTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermstorageaccountsas"

dataazurermstorageaccountsas.NewDataAzurermStorageAccountSasTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageAccountSasTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



