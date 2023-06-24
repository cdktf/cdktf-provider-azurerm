# `data_azurerm_key_vault_certificates`

Refer to the Terraform Registory for docs: [`data_azurerm_key_vault_certificates`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates).

# `dataAzurermKeyVaultCertificates` Submodule <a name="`dataAzurermKeyVaultCertificates` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificates <a name="DataAzurermKeyVaultCertificates" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates azurerm_key_vault_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.NewDataAzurermKeyVaultCertificates(scope Construct, id *string, config DataAzurermKeyVaultCertificatesConfig) DataAzurermKeyVaultCertificates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig">DataAzurermKeyVaultCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig">DataAzurermKeyVaultCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetIncludePending">ResetIncludePending</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKeyVaultCertificatesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludePending` <a name="ResetIncludePending" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetIncludePending"></a>

```go
func ResetIncludePending()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.DataAzurermKeyVaultCertificates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.DataAzurermKeyVaultCertificates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.DataAzurermKeyVaultCertificates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList">DataAzurermKeyVaultCertificatesCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference">DataAzurermKeyVaultCertificatesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePendingInput">IncludePendingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePending">IncludePending</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.certificates"></a>

```go
func Certificates() DataAzurermKeyVaultCertificatesCertificatesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList">DataAzurermKeyVaultCertificatesCertificatesList</a>

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeouts"></a>

```go
func Timeouts() DataAzurermKeyVaultCertificatesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference">DataAzurermKeyVaultCertificatesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludePendingInput`<sup>Optional</sup> <a name="IncludePendingInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePendingInput"></a>

```go
func IncludePendingInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludePending`<sup>Required</sup> <a name="IncludePending" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePending"></a>

```go
func IncludePending() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificatesCertificates <a name="DataAzurermKeyVaultCertificatesCertificates" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

&dataazurermkeyvaultcertificates.DataAzurermKeyVaultCertificatesCertificates {

}
```


### DataAzurermKeyVaultCertificatesConfig <a name="DataAzurermKeyVaultCertificatesConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

&dataazurermkeyvaultcertificates.DataAzurermKeyVaultCertificatesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyVaultId: *string,
	Id: *string,
	IncludePending: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.includePending">IncludePending</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePending`<sup>Optional</sup> <a name="IncludePending" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.includePending"></a>

```go
IncludePending interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKeyVaultCertificatesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#timeouts DataAzurermKeyVaultCertificates#timeouts}

---

### DataAzurermKeyVaultCertificatesTimeouts <a name="DataAzurermKeyVaultCertificatesTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

&dataazurermkeyvaultcertificates.DataAzurermKeyVaultCertificatesTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificatesCertificatesList <a name="DataAzurermKeyVaultCertificatesCertificatesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.NewDataAzurermKeyVaultCertificatesCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultCertificatesCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultCertificatesCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultCertificatesCertificatesOutputReference <a name="DataAzurermKeyVaultCertificatesCertificatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.NewDataAzurermKeyVaultCertificatesCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultCertificatesCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates">DataAzurermKeyVaultCertificatesCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultCertificatesCertificates
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates">DataAzurermKeyVaultCertificatesCertificates</a>

---


### DataAzurermKeyVaultCertificatesTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificatesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/dataazurermkeyvaultcertificates"

dataazurermkeyvaultcertificates.NewDataAzurermKeyVaultCertificatesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKeyVaultCertificatesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



