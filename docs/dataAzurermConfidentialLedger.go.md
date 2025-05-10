# `dataAzurermConfidentialLedger` Submodule <a name="`dataAzurermConfidentialLedger` Submodule" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConfidentialLedger <a name="DataAzurermConfidentialLedger" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger azurerm_confidential_ledger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.NewDataAzurermConfidentialLedger(scope Construct, id *string, config DataAzurermConfidentialLedgerConfig) DataAzurermConfidentialLedger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig">DataAzurermConfidentialLedgerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig">DataAzurermConfidentialLedgerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermConfidentialLedgerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermConfidentialLedger resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.DataAzurermConfidentialLedger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.DataAzurermConfidentialLedger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.DataAzurermConfidentialLedger_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.DataAzurermConfidentialLedger_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermConfidentialLedger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermConfidentialLedger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermConfidentialLedger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConfidentialLedger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.azureadBasedServicePrincipal">AzureadBasedServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList">DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.certificateBasedSecurityPrincipal">CertificateBasedSecurityPrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.identityServiceEndpoint">IdentityServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerEndpoint">LedgerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerType">LedgerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference">DataAzurermConfidentialLedgerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AzureadBasedServicePrincipal`<sup>Required</sup> <a name="AzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.azureadBasedServicePrincipal"></a>

```go
func AzureadBasedServicePrincipal() DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList">DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList</a>

---

##### `CertificateBasedSecurityPrincipal`<sup>Required</sup> <a name="CertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.certificateBasedSecurityPrincipal"></a>

```go
func CertificateBasedSecurityPrincipal() DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList</a>

---

##### `IdentityServiceEndpoint`<sup>Required</sup> <a name="IdentityServiceEndpoint" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.identityServiceEndpoint"></a>

```go
func IdentityServiceEndpoint() *string
```

- *Type:* *string

---

##### `LedgerEndpoint`<sup>Required</sup> <a name="LedgerEndpoint" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerEndpoint"></a>

```go
func LedgerEndpoint() *string
```

- *Type:* *string

---

##### `LedgerType`<sup>Required</sup> <a name="LedgerType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerType"></a>

```go
func LedgerType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeouts"></a>

```go
func Timeouts() DataAzurermConfidentialLedgerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference">DataAzurermConfidentialLedgerTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConfidentialLedgerAzureadBasedServicePrincipal <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

&dataazurermconfidentialledger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal {

}
```


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

&dataazurermconfidentialledger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal {

}
```


### DataAzurermConfidentialLedgerConfig <a name="DataAzurermConfidentialLedgerConfig" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

&dataazurermconfidentialledger.DataAzurermConfidentialLedgerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.timeouts"></a>

```go
Timeouts DataAzurermConfidentialLedgerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#timeouts DataAzurermConfidentialLedger#timeouts}

---

### DataAzurermConfidentialLedgerTimeouts <a name="DataAzurermConfidentialLedgerTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

&dataazurermconfidentialledger.DataAzurermConfidentialLedgerTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.NewDataAzurermConfidentialLedgerAzureadBasedServicePrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get"></a>

```go
func Get(index *f64) DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.NewDataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName">LedgerRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal">DataAzurermConfidentialLedgerAzureadBasedServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LedgerRoleName`<sup>Required</sup> <a name="LedgerRoleName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName"></a>

```go
func LedgerRoleName() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermConfidentialLedgerAzureadBasedServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal">DataAzurermConfidentialLedgerAzureadBasedServicePrincipal</a>

---


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.NewDataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get"></a>

```go
func Get(index *f64) DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.NewDataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName">LedgerRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey">PemPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LedgerRoleName`<sup>Required</sup> <a name="LedgerRoleName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName"></a>

```go
func LedgerRoleName() *string
```

- *Type:* *string

---

##### `PemPublicKey`<sup>Required</sup> <a name="PemPublicKey" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey"></a>

```go
func PemPublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal</a>

---


### DataAzurermConfidentialLedgerTimeoutsOutputReference <a name="DataAzurermConfidentialLedgerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermconfidentialledger"

dataazurermconfidentialledger.NewDataAzurermConfidentialLedgerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermConfidentialLedgerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



