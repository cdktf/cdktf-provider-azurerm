# `azurerm_key_vault_key`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key).

# `keyVaultKey` Submodule <a name="`keyVaultKey` Submodule" id="@cdktf/provider-azurerm.keyVaultKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultKey <a name="KeyVaultKey" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key azurerm_key_vault_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.NewKeyVaultKey(scope Construct, id *string, config KeyVaultKeyConfig) KeyVaultKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig">KeyVaultKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig">KeyVaultKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy">PutRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate">ResetNotBeforeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy">ResetRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRotationPolicy` <a name="PutRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy"></a>

```go
func PutRotationPolicy(value KeyVaultKeyRotationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve"></a>

```go
func ResetCurve()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate"></a>

```go
func ResetExpirationDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId"></a>

```go
func ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize"></a>

```go
func ResetKeySize()
```

##### `ResetNotBeforeDate` <a name="ResetNotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate"></a>

```go
func ResetNotBeforeDate()
```

##### `ResetRotationPolicy` <a name="ResetRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy"></a>

```go
func ResetRotationPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.KeyVaultKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.KeyVaultKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.KeyVaultKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e">E</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n">N</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId">ResourceVersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy">RotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId">VersionlessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x">X</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y">Y</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput">CurveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput">ExpirationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput">KeyOptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput">KeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput">NotBeforeDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput">RotationPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve">Curve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts">KeyOpts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate">NotBeforeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e"></a>

```go
func E() *string
```

- *Type:* *string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n"></a>

```go
func N() *string
```

- *Type:* *string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh"></a>

```go
func PublicKeyOpenssh() *string
```

- *Type:* *string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem"></a>

```go
func PublicKeyPem() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceVersionlessId`<sup>Required</sup> <a name="ResourceVersionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId"></a>

```go
func ResourceVersionlessId() *string
```

- *Type:* *string

---

##### `RotationPolicy`<sup>Required</sup> <a name="RotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy"></a>

```go
func RotationPolicy() KeyVaultKeyRotationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts"></a>

```go
func Timeouts() KeyVaultKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VersionlessId`<sup>Required</sup> <a name="VersionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId"></a>

```go
func VersionlessId() *string
```

- *Type:* *string

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x"></a>

```go
func X() *string
```

- *Type:* *string

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y"></a>

```go
func Y() *string
```

- *Type:* *string

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput"></a>

```go
func CurveInput() *string
```

- *Type:* *string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput"></a>

```go
func ExpirationDateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyOptsInput`<sup>Optional</sup> <a name="KeyOptsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput"></a>

```go
func KeyOptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput"></a>

```go
func KeySizeInput() *f64
```

- *Type:* *f64

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotBeforeDateInput`<sup>Optional</sup> <a name="NotBeforeDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput"></a>

```go
func NotBeforeDateInput() *string
```

- *Type:* *string

---

##### `RotationPolicyInput`<sup>Optional</sup> <a name="RotationPolicyInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput"></a>

```go
func RotationPolicyInput() KeyVaultKeyRotationPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve"></a>

```go
func Curve() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts"></a>

```go
func KeyOpts() *[]*string
```

- *Type:* *[]*string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotBeforeDate`<sup>Required</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate"></a>

```go
func NotBeforeDate() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultKeyConfig <a name="KeyVaultKeyConfig" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

&keyvaultkey.KeyVaultKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyOpts: *[]*string,
	KeyType: *string,
	KeyVaultId: *string,
	Name: *string,
	Curve: *string,
	ExpirationDate: *string,
	Id: *string,
	KeySize: *f64,
	NotBeforeDate: *string,
	RotationPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVaultKey.KeyVaultKeyRotationPolicy,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVaultKey.KeyVaultKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts">KeyOpts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#name KeyVaultKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve">Curve</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#id KeyVaultKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize">KeySize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate">NotBeforeDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy">RotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | rotation_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts"></a>

```go
KeyOpts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}.

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#name KeyVaultKey#name}.

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve"></a>

```go
Curve *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}.

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate"></a>

```go
ExpirationDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#id KeyVaultKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize"></a>

```go
KeySize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}.

---

##### `NotBeforeDate`<sup>Optional</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate"></a>

```go
NotBeforeDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}.

---

##### `RotationPolicy`<sup>Optional</sup> <a name="RotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy"></a>

```go
RotationPolicy KeyVaultKeyRotationPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

rotation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#rotation_policy KeyVaultKey#rotation_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts"></a>

```go
Timeouts KeyVaultKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#timeouts KeyVaultKey#timeouts}

---

### KeyVaultKeyRotationPolicy <a name="KeyVaultKeyRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

&keyvaultkey.KeyVaultKeyRotationPolicy {
	Automatic: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic,
	ExpireAfter: *string,
	NotifyBeforeExpiry: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | automatic block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter">ExpireAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry">NotifyBeforeExpiry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic"></a>

```go
Automatic KeyVaultKeyRotationPolicyAutomatic
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#automatic KeyVaultKey#automatic}

---

##### `ExpireAfter`<sup>Optional</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter"></a>

```go
ExpireAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}.

---

##### `NotifyBeforeExpiry`<sup>Optional</sup> <a name="NotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry"></a>

```go
NotifyBeforeExpiry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}.

---

### KeyVaultKeyRotationPolicyAutomatic <a name="KeyVaultKeyRotationPolicyAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

&keyvaultkey.KeyVaultKeyRotationPolicyAutomatic {
	TimeAfterCreation: *string,
	TimeBeforeExpiry: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation">TimeAfterCreation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry">TimeBeforeExpiry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}. |

---

##### `TimeAfterCreation`<sup>Optional</sup> <a name="TimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation"></a>

```go
TimeAfterCreation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}.

---

##### `TimeBeforeExpiry`<sup>Optional</sup> <a name="TimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry"></a>

```go
TimeBeforeExpiry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}.

---

### KeyVaultKeyTimeouts <a name="KeyVaultKeyTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

&keyvaultkey.KeyVaultKeyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#create KeyVaultKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#read KeyVaultKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#update KeyVaultKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#create KeyVaultKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#read KeyVaultKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/key_vault_key#update KeyVaultKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultKeyRotationPolicyAutomaticOutputReference <a name="KeyVaultKeyRotationPolicyAutomaticOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.NewKeyVaultKeyRotationPolicyAutomaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultKeyRotationPolicyAutomaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation">ResetTimeAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry">ResetTimeBeforeExpiry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeAfterCreation` <a name="ResetTimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation"></a>

```go
func ResetTimeAfterCreation()
```

##### `ResetTimeBeforeExpiry` <a name="ResetTimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry"></a>

```go
func ResetTimeBeforeExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput">TimeAfterCreationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput">TimeBeforeExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation">TimeAfterCreation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry">TimeBeforeExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeAfterCreationInput`<sup>Optional</sup> <a name="TimeAfterCreationInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput"></a>

```go
func TimeAfterCreationInput() *string
```

- *Type:* *string

---

##### `TimeBeforeExpiryInput`<sup>Optional</sup> <a name="TimeBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput"></a>

```go
func TimeBeforeExpiryInput() *string
```

- *Type:* *string

---

##### `TimeAfterCreation`<sup>Required</sup> <a name="TimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation"></a>

```go
func TimeAfterCreation() *string
```

- *Type:* *string

---

##### `TimeBeforeExpiry`<sup>Required</sup> <a name="TimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry"></a>

```go
func TimeBeforeExpiry() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultKeyRotationPolicyAutomatic
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---


### KeyVaultKeyRotationPolicyOutputReference <a name="KeyVaultKeyRotationPolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.NewKeyVaultKeyRotationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultKeyRotationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic">PutAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter">ResetExpireAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry">ResetNotifyBeforeExpiry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomatic` <a name="PutAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic"></a>

```go
func PutAutomatic(value KeyVaultKeyRotationPolicyAutomatic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```

##### `ResetExpireAfter` <a name="ResetExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter"></a>

```go
func ResetExpireAfter()
```

##### `ResetNotifyBeforeExpiry` <a name="ResetNotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry"></a>

```go
func ResetNotifyBeforeExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput">AutomaticInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput">ExpireAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput">NotifyBeforeExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter">ExpireAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry">NotifyBeforeExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic"></a>

```go
func Automatic() KeyVaultKeyRotationPolicyAutomaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() KeyVaultKeyRotationPolicyAutomatic
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `ExpireAfterInput`<sup>Optional</sup> <a name="ExpireAfterInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput"></a>

```go
func ExpireAfterInput() *string
```

- *Type:* *string

---

##### `NotifyBeforeExpiryInput`<sup>Optional</sup> <a name="NotifyBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput"></a>

```go
func NotifyBeforeExpiryInput() *string
```

- *Type:* *string

---

##### `ExpireAfter`<sup>Required</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter"></a>

```go
func ExpireAfter() *string
```

- *Type:* *string

---

##### `NotifyBeforeExpiry`<sup>Required</sup> <a name="NotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry"></a>

```go
func NotifyBeforeExpiry() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() KeyVaultKeyRotationPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---


### KeyVaultKeyTimeoutsOutputReference <a name="KeyVaultKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultkey"

keyvaultkey.NewKeyVaultKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



