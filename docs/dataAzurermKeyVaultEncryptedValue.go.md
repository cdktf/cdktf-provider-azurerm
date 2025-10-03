# `dataAzurermKeyVaultEncryptedValue` Submodule <a name="`dataAzurermKeyVaultEncryptedValue` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultEncryptedValue <a name="DataAzurermKeyVaultEncryptedValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value azurerm_key_vault_encrypted_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

dataazurermkeyvaultencryptedvalue.NewDataAzurermKeyVaultEncryptedValue(scope Construct, id *string, config DataAzurermKeyVaultEncryptedValueConfig) DataAzurermKeyVaultEncryptedValue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig">DataAzurermKeyVaultEncryptedValueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig">DataAzurermKeyVaultEncryptedValueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData">ResetEncryptedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue">ResetPlainTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKeyVaultEncryptedValueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

---

##### `ResetEncryptedData` <a name="ResetEncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetEncryptedData"></a>

```go
func ResetEncryptedData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetId"></a>

```go
func ResetId()
```

##### `ResetPlainTextValue` <a name="ResetPlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetPlainTextValue"></a>

```go
func ResetPlainTextValue()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultEncryptedValue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

dataazurermkeyvaultencryptedvalue.DataAzurermKeyVaultEncryptedValue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

dataazurermkeyvaultencryptedvalue.DataAzurermKeyVaultEncryptedValue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

dataazurermkeyvaultencryptedvalue.DataAzurermKeyVaultEncryptedValue_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

dataazurermkeyvaultencryptedvalue.DataAzurermKeyVaultEncryptedValue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermKeyVaultEncryptedValue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermKeyVaultEncryptedValue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermKeyVaultEncryptedValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultEncryptedValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.decodedPlainTextValue">DecodedPlainTextValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput">EncryptedDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput">PlainTextValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData">EncryptedData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue">PlainTextValue</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DecodedPlainTextValue`<sup>Required</sup> <a name="DecodedPlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.decodedPlainTextValue"></a>

```go
func DecodedPlainTextValue() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeouts"></a>

```go
func Timeouts() DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference">DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `EncryptedDataInput`<sup>Optional</sup> <a name="EncryptedDataInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedDataInput"></a>

```go
func EncryptedDataInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `PlainTextValueInput`<sup>Optional</sup> <a name="PlainTextValueInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValueInput"></a>

```go
func PlainTextValueInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `EncryptedData`<sup>Required</sup> <a name="EncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.encryptedData"></a>

```go
func EncryptedData() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `PlainTextValue`<sup>Required</sup> <a name="PlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.plainTextValue"></a>

```go
func PlainTextValue() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultEncryptedValueConfig <a name="DataAzurermKeyVaultEncryptedValueConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

&dataazurermkeyvaultencryptedvalue.DataAzurermKeyVaultEncryptedValueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Algorithm: *string,
	KeyVaultKeyId: *string,
	EncryptedData: *string,
	Id: *string,
	PlainTextValue: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData">EncryptedData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue">PlainTextValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}.

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}.

---

##### `EncryptedData`<sup>Optional</sup> <a name="EncryptedData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.encryptedData"></a>

```go
EncryptedData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlainTextValue`<sup>Optional</sup> <a name="PlainTextValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.plainTextValue"></a>

```go
PlainTextValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKeyVaultEncryptedValueTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts">DataAzurermKeyVaultEncryptedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}

---

### DataAzurermKeyVaultEncryptedValueTimeouts <a name="DataAzurermKeyVaultEncryptedValueTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

&dataazurermkeyvaultencryptedvalue.DataAzurermKeyVaultEncryptedValueTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference <a name="DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermkeyvaultencryptedvalue"

dataazurermkeyvaultencryptedvalue.NewDataAzurermKeyVaultEncryptedValueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultEncryptedValue.DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



