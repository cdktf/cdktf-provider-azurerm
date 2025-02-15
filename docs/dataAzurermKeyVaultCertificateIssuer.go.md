# `dataAzurermKeyVaultCertificateIssuer` Submodule <a name="`dataAzurermKeyVaultCertificateIssuer` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificateIssuer <a name="DataAzurermKeyVaultCertificateIssuer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.NewDataAzurermKeyVaultCertificateIssuer(scope Construct, id *string, config DataAzurermKeyVaultCertificateIssuerConfig) DataAzurermKeyVaultCertificateIssuer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig">DataAzurermKeyVaultCertificateIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig">DataAzurermKeyVaultCertificateIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKeyVaultCertificateIssuerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermKeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermKeyVaultCertificateIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermKeyVaultCertificateIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultCertificateIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.admin">Admin</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList">DataAzurermKeyVaultCertificateIssuerAdminList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference">DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.admin"></a>

```go
func Admin() DataAzurermKeyVaultCertificateIssuerAdminList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList">DataAzurermKeyVaultCertificateIssuerAdminList</a>

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeouts"></a>

```go
func Timeouts() DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference">DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificateIssuerAdmin <a name="DataAzurermKeyVaultCertificateIssuerAdmin" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

&dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuerAdmin {

}
```


### DataAzurermKeyVaultCertificateIssuerConfig <a name="DataAzurermKeyVaultCertificateIssuerConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

&dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuerConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#key_vault_id DataAzurermKeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#name DataAzurermKeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#id DataAzurermKeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#key_vault_id DataAzurermKeyVaultCertificateIssuer#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#name DataAzurermKeyVaultCertificateIssuer#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#id DataAzurermKeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKeyVaultCertificateIssuerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts">DataAzurermKeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#timeouts DataAzurermKeyVaultCertificateIssuer#timeouts}

---

### DataAzurermKeyVaultCertificateIssuerTimeouts <a name="DataAzurermKeyVaultCertificateIssuerTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

&dataazurermkeyvaultcertificateissuer.DataAzurermKeyVaultCertificateIssuerTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#read DataAzurermKeyVaultCertificateIssuer#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/key_vault_certificate_issuer#read DataAzurermKeyVaultCertificateIssuer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificateIssuerAdminList <a name="DataAzurermKeyVaultCertificateIssuerAdminList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.NewDataAzurermKeyVaultCertificateIssuerAdminList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificateIssuerAdminList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificateIssuerAdminOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificateIssuerAdminOutputReference <a name="DataAzurermKeyVaultCertificateIssuerAdminOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.NewDataAzurermKeyVaultCertificateIssuerAdminOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificateIssuerAdminOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin">DataAzurermKeyVaultCertificateIssuerAdmin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdminOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificateIssuerAdmin
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerAdmin">DataAzurermKeyVaultCertificateIssuerAdmin</a>

---


### DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultcertificateissuer"

dataazurermkeyvaultcertificateissuer.NewDataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificateIssuer.DataAzurermKeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



