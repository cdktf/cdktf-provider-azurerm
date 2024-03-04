# `dataAzurermMarketplaceAgreement` Submodule <a name="`dataAzurermMarketplaceAgreement` Submodule" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMarketplaceAgreement <a name="DataAzurermMarketplaceAgreement" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement azurerm_marketplace_agreement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

dataazurermmarketplaceagreement.NewDataAzurermMarketplaceAgreement(scope Construct, id *string, config DataAzurermMarketplaceAgreementConfig) DataAzurermMarketplaceAgreement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig">DataAzurermMarketplaceAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig">DataAzurermMarketplaceAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMarketplaceAgreementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMarketplaceAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

dataazurermmarketplaceagreement.DataAzurermMarketplaceAgreement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

dataazurermmarketplaceagreement.DataAzurermMarketplaceAgreement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

dataazurermmarketplaceagreement.DataAzurermMarketplaceAgreement_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

dataazurermmarketplaceagreement.DataAzurermMarketplaceAgreement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermMarketplaceAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermMarketplaceAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermMarketplaceAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMarketplaceAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.licenseTextLink">LicenseTextLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.privacyPolicyLink">PrivacyPolicyLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference">DataAzurermMarketplaceAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LicenseTextLink`<sup>Required</sup> <a name="LicenseTextLink" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.licenseTextLink"></a>

```go
func LicenseTextLink() *string
```

- *Type:* *string

---

##### `PrivacyPolicyLink`<sup>Required</sup> <a name="PrivacyPolicyLink" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.privacyPolicyLink"></a>

```go
func PrivacyPolicyLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeouts"></a>

```go
func Timeouts() DataAzurermMarketplaceAgreementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference">DataAzurermMarketplaceAgreementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMarketplaceAgreementConfig <a name="DataAzurermMarketplaceAgreementConfig" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

&dataazurermmarketplaceagreement.DataAzurermMarketplaceAgreementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Offer: *string,
	Plan: *string,
	Publisher: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#offer DataAzurermMarketplaceAgreement#offer}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.plan">Plan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#plan DataAzurermMarketplaceAgreement#plan}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#publisher DataAzurermMarketplaceAgreement#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#id DataAzurermMarketplaceAgreement#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#offer DataAzurermMarketplaceAgreement#offer}.

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#plan DataAzurermMarketplaceAgreement#plan}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#publisher DataAzurermMarketplaceAgreement#publisher}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#id DataAzurermMarketplaceAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMarketplaceAgreementTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts">DataAzurermMarketplaceAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#timeouts DataAzurermMarketplaceAgreement#timeouts}

---

### DataAzurermMarketplaceAgreementTimeouts <a name="DataAzurermMarketplaceAgreementTimeouts" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

&dataazurermmarketplaceagreement.DataAzurermMarketplaceAgreementTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#read DataAzurermMarketplaceAgreement#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/marketplace_agreement#read DataAzurermMarketplaceAgreement#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMarketplaceAgreementTimeoutsOutputReference <a name="DataAzurermMarketplaceAgreementTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmarketplaceagreement"

dataazurermmarketplaceagreement.NewDataAzurermMarketplaceAgreementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMarketplaceAgreementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMarketplaceAgreement.DataAzurermMarketplaceAgreementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



