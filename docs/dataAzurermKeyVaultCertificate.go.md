# `dataAzurermKeyVaultCertificate` Submodule <a name="`dataAzurermKeyVaultCertificate` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificate <a name="DataAzurermKeyVaultCertificate" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate azurerm_key_vault_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificate(scope Construct, id *string, config DataAzurermKeyVaultCertificateConfig) DataAzurermKeyVaultCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig">DataAzurermKeyVaultCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig">DataAzurermKeyVaultCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKeyVaultCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermKeyVaultCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermKeyVaultCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermKeyVaultCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateData">CertificateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateDataBase64">CertificateDataBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificatePolicy">CertificatePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList">DataAzurermKeyVaultCertificateCertificatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.notBefore">NotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerId">ResourceManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerVersionlessId">ResourceManagerVersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference">DataAzurermKeyVaultCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessId">VersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessSecretId">VersionlessSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CertificateData`<sup>Required</sup> <a name="CertificateData" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateData"></a>

```go
func CertificateData() *string
```

- *Type:* *string

---

##### `CertificateDataBase64`<sup>Required</sup> <a name="CertificateDataBase64" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificateDataBase64"></a>

```go
func CertificateDataBase64() *string
```

- *Type:* *string

---

##### `CertificatePolicy`<sup>Required</sup> <a name="CertificatePolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.certificatePolicy"></a>

```go
func CertificatePolicy() DataAzurermKeyVaultCertificateCertificatePolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList">DataAzurermKeyVaultCertificateCertificatePolicyList</a>

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.notBefore"></a>

```go
func NotBefore() *string
```

- *Type:* *string

---

##### `ResourceManagerId`<sup>Required</sup> <a name="ResourceManagerId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerId"></a>

```go
func ResourceManagerId() *string
```

- *Type:* *string

---

##### `ResourceManagerVersionlessId`<sup>Required</sup> <a name="ResourceManagerVersionlessId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.resourceManagerVersionlessId"></a>

```go
func ResourceManagerVersionlessId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeouts"></a>

```go
func Timeouts() DataAzurermKeyVaultCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference">DataAzurermKeyVaultCertificateTimeoutsOutputReference</a>

---

##### `VersionlessId`<sup>Required</sup> <a name="VersionlessId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessId"></a>

```go
func VersionlessId() *string
```

- *Type:* *string

---

##### `VersionlessSecretId`<sup>Required</sup> <a name="VersionlessSecretId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionlessSecretId"></a>

```go
func VersionlessSecretId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificateCertificatePolicy <a name="DataAzurermKeyVaultCertificateCertificatePolicy" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicy {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicySecretProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties {

}
```


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {

}
```


### DataAzurermKeyVaultCertificateConfig <a name="DataAzurermKeyVaultCertificateConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#name DataAzurermKeyVaultCertificate#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#id DataAzurermKeyVaultCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKeyVaultCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts">DataAzurermKeyVaultCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#timeouts DataAzurermKeyVaultCertificate#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#version DataAzurermKeyVaultCertificate#version}.

---

### DataAzurermKeyVaultCertificateTimeouts <a name="DataAzurermKeyVaultCertificateTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

&dataazurermkeyvaultcertificate.DataAzurermKeyVaultCertificateTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/data-sources/key_vault_certificate#read DataAzurermKeyVaultCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve">Curve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable">Exportable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey">ReuseKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties">DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.curve"></a>

```go
func Curve() *string
```

- *Type:* *string

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.exportable"></a>

```go
func Exportable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `ReuseKey`<sup>Required</sup> <a name="ReuseKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.reuseKey"></a>

```go
func ReuseKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties">DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.action"></a>

```go
func Action() DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionActionList</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.trigger"></a>

```go
func Trigger() DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry">DaysBeforeExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage">LifetimePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysBeforeExpiry`<sup>Required</sup> <a name="DaysBeforeExpiry" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.daysBeforeExpiry"></a>

```go
func DaysBeforeExpiry() *f64
```

- *Type:* *f64

---

##### `LifetimePercentage`<sup>Required</sup> <a name="LifetimePercentage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.lifetimePercentage"></a>

```go
func LifetimePercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyList <a name="DataAzurermKeyVaultCertificateCertificatePolicyList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters">IssuerParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties">KeyProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction">LifetimeAction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties">SecretProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties">X509CertificateProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy">DataAzurermKeyVaultCertificateCertificatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerParameters`<sup>Required</sup> <a name="IssuerParameters" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.issuerParameters"></a>

```go
func IssuerParameters() DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList">DataAzurermKeyVaultCertificateCertificatePolicyIssuerParametersList</a>

---

##### `KeyProperties`<sup>Required</sup> <a name="KeyProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.keyProperties"></a>

```go
func KeyProperties() DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyKeyPropertiesList</a>

---

##### `LifetimeAction`<sup>Required</sup> <a name="LifetimeAction" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.lifetimeAction"></a>

```go
func LifetimeAction() DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList">DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionList</a>

---

##### `SecretProperties`<sup>Required</sup> <a name="SecretProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.secretProperties"></a>

```go
func SecretProperties() DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList">DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList</a>

---

##### `X509CertificateProperties`<sup>Required</sup> <a name="X509CertificateProperties" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.x509CertificateProperties"></a>

```go
func X509CertificateProperties() DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicy">DataAzurermKeyVaultCertificateCertificatePolicy</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties">DataAzurermKeyVaultCertificateCertificatePolicySecretProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicySecretProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicySecretProperties">DataAzurermKeyVaultCertificateCertificatePolicySecretProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage">KeyUsage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths">ValidityInMonths</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.keyUsage"></a>

```go
func KeyUsage() *[]*string
```

- *Type:* *[]*string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList</a>

---

##### `ValidityInMonths`<sup>Required</sup> <a name="ValidityInMonths" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.validityInMonths"></a>

```go
func ValidityInMonths() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties</a>

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference <a name="DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames">DnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails">Emails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns">Upns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.dnsNames"></a>

```go
func DnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.emails"></a>

```go
func Emails() *[]*string
```

- *Type:* *[]*string

---

##### `Upns`<sup>Required</sup> <a name="Upns" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.upns"></a>

```go
func Upns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames">DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames</a>

---


### DataAzurermKeyVaultCertificateTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermkeyvaultcertificate"

dataazurermkeyvaultcertificate.NewDataAzurermKeyVaultCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKeyVaultCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificate.DataAzurermKeyVaultCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



