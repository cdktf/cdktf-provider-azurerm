# `azurerm_palo_alto_local_rulestack_certificate`

Refer to the Terraform Registory for docs: [`azurerm_palo_alto_local_rulestack_certificate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate).

# `paloAltoLocalRulestackCertificate` Submodule <a name="`paloAltoLocalRulestackCertificate` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackCertificate <a name="PaloAltoLocalRulestackCertificate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate azurerm_palo_alto_local_rulestack_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

paloaltolocalrulestackcertificate.NewPaloAltoLocalRulestackCertificate(scope Construct, id *string, config PaloAltoLocalRulestackCertificateConfig) PaloAltoLocalRulestackCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig">PaloAltoLocalRulestackCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig">PaloAltoLocalRulestackCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetAuditComment">ResetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetKeyVaultCertificateId">ResetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetSelfSigned">ResetSelfSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts"></a>

```go
func PutTimeouts(value PaloAltoLocalRulestackCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

---

##### `ResetAuditComment` <a name="ResetAuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetAuditComment"></a>

```go
func ResetAuditComment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVaultCertificateId` <a name="ResetKeyVaultCertificateId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetKeyVaultCertificateId"></a>

```go
func ResetKeyVaultCertificateId()
```

##### `ResetSelfSigned` <a name="ResetSelfSigned" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetSelfSigned"></a>

```go
func ResetSelfSigned()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

paloaltolocalrulestackcertificate.PaloAltoLocalRulestackCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

paloaltolocalrulestackcertificate.PaloAltoLocalRulestackCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

paloaltolocalrulestackcertificate.PaloAltoLocalRulestackCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference">PaloAltoLocalRulestackCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditCommentInput">AuditCommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateIdInput">KeyVaultCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackIdInput">RulestackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSignedInput">SelfSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditComment">AuditComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackId">RulestackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSigned">SelfSigned</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeouts"></a>

```go
func Timeouts() PaloAltoLocalRulestackCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference">PaloAltoLocalRulestackCertificateTimeoutsOutputReference</a>

---

##### `AuditCommentInput`<sup>Optional</sup> <a name="AuditCommentInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditCommentInput"></a>

```go
func AuditCommentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultCertificateIdInput`<sup>Optional</sup> <a name="KeyVaultCertificateIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateIdInput"></a>

```go
func KeyVaultCertificateIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RulestackIdInput`<sup>Optional</sup> <a name="RulestackIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackIdInput"></a>

```go
func RulestackIdInput() *string
```

- *Type:* *string

---

##### `SelfSignedInput`<sup>Optional</sup> <a name="SelfSignedInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSignedInput"></a>

```go
func SelfSignedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuditComment`<sup>Required</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditComment"></a>

```go
func AuditComment() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultCertificateId`<sup>Required</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateId"></a>

```go
func KeyVaultCertificateId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackId"></a>

```go
func RulestackId() *string
```

- *Type:* *string

---

##### `SelfSigned`<sup>Required</sup> <a name="SelfSigned" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSigned"></a>

```go
func SelfSigned() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackCertificateConfig <a name="PaloAltoLocalRulestackCertificateConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

&paloaltolocalrulestackcertificate.PaloAltoLocalRulestackCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RulestackId: *string,
	AuditComment: *string,
	Description: *string,
	Id: *string,
	KeyVaultCertificateId: *string,
	SelfSigned: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.rulestackId">RulestackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.auditComment">AuditComment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.keyVaultCertificateId">KeyVaultCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.selfSigned">SelfSigned</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}.

---

##### `RulestackId`<sup>Required</sup> <a name="RulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.rulestackId"></a>

```go
RulestackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}.

---

##### `AuditComment`<sup>Optional</sup> <a name="AuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.auditComment"></a>

```go
AuditComment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultCertificateId`<sup>Optional</sup> <a name="KeyVaultCertificateId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.keyVaultCertificateId"></a>

```go
KeyVaultCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}.

---

##### `SelfSigned`<sup>Optional</sup> <a name="SelfSigned" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.selfSigned"></a>

```go
SelfSigned interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.timeouts"></a>

```go
Timeouts PaloAltoLocalRulestackCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#timeouts PaloAltoLocalRulestackCertificate#timeouts}

---

### PaloAltoLocalRulestackCertificateTimeouts <a name="PaloAltoLocalRulestackCertificateTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

&paloaltolocalrulestackcertificate.PaloAltoLocalRulestackCertificateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackCertificateTimeoutsOutputReference <a name="PaloAltoLocalRulestackCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/paloaltolocalrulestackcertificate"

paloaltolocalrulestackcertificate.NewPaloAltoLocalRulestackCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaloAltoLocalRulestackCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



