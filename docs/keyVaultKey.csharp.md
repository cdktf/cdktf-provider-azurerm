# `azurerm_key_vault_key`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key).

# `keyVaultKey` Submodule <a name="`keyVaultKey` Submodule" id="@cdktf/provider-azurerm.keyVaultKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultKey <a name="KeyVaultKey" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key azurerm_key_vault_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKey(Construct Scope, string Id, KeyVaultKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig">KeyVaultKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRotationPolicy` <a name="PutRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy"></a>

```csharp
private void PutRotationPolicy(KeyVaultKeyRotationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyVaultKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve"></a>

```csharp
private void ResetCurve()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate"></a>

```csharp
private void ResetExpirationDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetNotBeforeDate` <a name="ResetNotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate"></a>

```csharp
private void ResetNotBeforeDate()
```

##### `ResetRotationPolicy` <a name="ResetRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy"></a>

```csharp
private void ResetRotationPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId">ResourceVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy">RotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId">VersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x">X</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y">Y</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput">CurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput">ExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput">KeyOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput">NotBeforeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput">RotationPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve">Curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts">KeyOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate">NotBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh"></a>

```csharp
public string PublicKeyOpenssh { get; }
```

- *Type:* string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceVersionlessId`<sup>Required</sup> <a name="ResourceVersionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId"></a>

```csharp
public string ResourceVersionlessId { get; }
```

- *Type:* string

---

##### `RotationPolicy`<sup>Required</sup> <a name="RotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy"></a>

```csharp
public KeyVaultKeyRotationPolicyOutputReference RotationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts"></a>

```csharp
public KeyVaultKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionlessId`<sup>Required</sup> <a name="VersionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId"></a>

```csharp
public string VersionlessId { get; }
```

- *Type:* string

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x"></a>

```csharp
public string X { get; }
```

- *Type:* string

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y"></a>

```csharp
public string Y { get; }
```

- *Type:* string

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput"></a>

```csharp
public string CurveInput { get; }
```

- *Type:* string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput"></a>

```csharp
public string ExpirationDateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyOptsInput`<sup>Optional</sup> <a name="KeyOptsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput"></a>

```csharp
public string[] KeyOptsInput { get; }
```

- *Type:* string[]

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotBeforeDateInput`<sup>Optional</sup> <a name="NotBeforeDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput"></a>

```csharp
public string NotBeforeDateInput { get; }
```

- *Type:* string

---

##### `RotationPolicyInput`<sup>Optional</sup> <a name="RotationPolicyInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput"></a>

```csharp
public KeyVaultKeyRotationPolicy RotationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve"></a>

```csharp
public string Curve { get; }
```

- *Type:* string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts"></a>

```csharp
public string[] KeyOpts { get; }
```

- *Type:* string[]

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotBeforeDate`<sup>Required</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate"></a>

```csharp
public string NotBeforeDate { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultKeyConfig <a name="KeyVaultKeyConfig" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] KeyOpts,
    string KeyType,
    string KeyVaultId,
    string Name,
    string Curve = null,
    string ExpirationDate = null,
    string Id = null,
    double KeySize = null,
    string NotBeforeDate = null,
    KeyVaultKeyRotationPolicy RotationPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    KeyVaultKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts">KeyOpts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType">KeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#name KeyVaultKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve">Curve</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#id KeyVaultKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize">KeySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate">NotBeforeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy">RotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | rotation_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts"></a>

```csharp
public string[] KeyOpts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}.

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#name KeyVaultKey#name}.

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve"></a>

```csharp
public string Curve { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}.

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#id KeyVaultKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}.

---

##### `NotBeforeDate`<sup>Optional</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate"></a>

```csharp
public string NotBeforeDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}.

---

##### `RotationPolicy`<sup>Optional</sup> <a name="RotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy"></a>

```csharp
public KeyVaultKeyRotationPolicy RotationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

rotation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#rotation_policy KeyVaultKey#rotation_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts"></a>

```csharp
public KeyVaultKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#timeouts KeyVaultKey#timeouts}

---

### KeyVaultKeyRotationPolicy <a name="KeyVaultKeyRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyRotationPolicy {
    KeyVaultKeyRotationPolicyAutomatic Automatic = null,
    string ExpireAfter = null,
    string NotifyBeforeExpiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | automatic block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter">ExpireAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry">NotifyBeforeExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic"></a>

```csharp
public KeyVaultKeyRotationPolicyAutomatic Automatic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#automatic KeyVaultKey#automatic}

---

##### `ExpireAfter`<sup>Optional</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter"></a>

```csharp
public string ExpireAfter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}.

---

##### `NotifyBeforeExpiry`<sup>Optional</sup> <a name="NotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry"></a>

```csharp
public string NotifyBeforeExpiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}.

---

### KeyVaultKeyRotationPolicyAutomatic <a name="KeyVaultKeyRotationPolicyAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyRotationPolicyAutomatic {
    string TimeAfterCreation = null,
    string TimeBeforeExpiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation">TimeAfterCreation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry">TimeBeforeExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}. |

---

##### `TimeAfterCreation`<sup>Optional</sup> <a name="TimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation"></a>

```csharp
public string TimeAfterCreation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}.

---

##### `TimeBeforeExpiry`<sup>Optional</sup> <a name="TimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry"></a>

```csharp
public string TimeBeforeExpiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}.

---

### KeyVaultKeyTimeouts <a name="KeyVaultKeyTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#create KeyVaultKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#read KeyVaultKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#update KeyVaultKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#create KeyVaultKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#read KeyVaultKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/key_vault_key#update KeyVaultKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultKeyRotationPolicyAutomaticOutputReference <a name="KeyVaultKeyRotationPolicyAutomaticOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyRotationPolicyAutomaticOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeAfterCreation` <a name="ResetTimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation"></a>

```csharp
private void ResetTimeAfterCreation()
```

##### `ResetTimeBeforeExpiry` <a name="ResetTimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry"></a>

```csharp
private void ResetTimeBeforeExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput">TimeAfterCreationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput">TimeBeforeExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation">TimeAfterCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry">TimeBeforeExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeAfterCreationInput`<sup>Optional</sup> <a name="TimeAfterCreationInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput"></a>

```csharp
public string TimeAfterCreationInput { get; }
```

- *Type:* string

---

##### `TimeBeforeExpiryInput`<sup>Optional</sup> <a name="TimeBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput"></a>

```csharp
public string TimeBeforeExpiryInput { get; }
```

- *Type:* string

---

##### `TimeAfterCreation`<sup>Required</sup> <a name="TimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation"></a>

```csharp
public string TimeAfterCreation { get; }
```

- *Type:* string

---

##### `TimeBeforeExpiry`<sup>Required</sup> <a name="TimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry"></a>

```csharp
public string TimeBeforeExpiry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue"></a>

```csharp
public KeyVaultKeyRotationPolicyAutomatic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---


### KeyVaultKeyRotationPolicyOutputReference <a name="KeyVaultKeyRotationPolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyRotationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomatic` <a name="PutAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic"></a>

```csharp
private void PutAutomatic(KeyVaultKeyRotationPolicyAutomatic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic"></a>

```csharp
private void ResetAutomatic()
```

##### `ResetExpireAfter` <a name="ResetExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter"></a>

```csharp
private void ResetExpireAfter()
```

##### `ResetNotifyBeforeExpiry` <a name="ResetNotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry"></a>

```csharp
private void ResetNotifyBeforeExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput">AutomaticInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput">ExpireAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput">NotifyBeforeExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter">ExpireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry">NotifyBeforeExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic"></a>

```csharp
public KeyVaultKeyRotationPolicyAutomaticOutputReference Automatic { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput"></a>

```csharp
public KeyVaultKeyRotationPolicyAutomatic AutomaticInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `ExpireAfterInput`<sup>Optional</sup> <a name="ExpireAfterInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput"></a>

```csharp
public string ExpireAfterInput { get; }
```

- *Type:* string

---

##### `NotifyBeforeExpiryInput`<sup>Optional</sup> <a name="NotifyBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput"></a>

```csharp
public string NotifyBeforeExpiryInput { get; }
```

- *Type:* string

---

##### `ExpireAfter`<sup>Required</sup> <a name="ExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter"></a>

```csharp
public string ExpireAfter { get; }
```

- *Type:* string

---

##### `NotifyBeforeExpiry`<sup>Required</sup> <a name="NotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry"></a>

```csharp
public string NotifyBeforeExpiry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue"></a>

```csharp
public KeyVaultKeyRotationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---


### KeyVaultKeyTimeoutsOutputReference <a name="KeyVaultKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



