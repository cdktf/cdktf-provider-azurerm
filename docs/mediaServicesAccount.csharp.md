# `azurerm_media_services_account`

Refer to the Terraform Registory for docs: [`azurerm_media_services_account`](https://www.terraform.io/docs/providers/azurerm/r/media_services_account).

# `mediaServicesAccount` Submodule <a name="`mediaServicesAccount` Submodule" id="@cdktf/provider-azurerm.mediaServicesAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesAccount <a name="MediaServicesAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account azurerm_media_services_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccount(Construct Scope, string Id, MediaServicesAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig">MediaServicesAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig">MediaServicesAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl">PutKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetKeyDeliveryAccessControl">ResetKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetStorageAuthenticationType">ResetStorageAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption"></a>

```csharp
private void PutEncryption(MediaServicesAccountEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity"></a>

```csharp
private void PutIdentity(MediaServicesAccountIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---

##### `PutKeyDeliveryAccessControl` <a name="PutKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl"></a>

```csharp
private void PutKeyDeliveryAccessControl(MediaServicesAccountKeyDeliveryAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putKeyDeliveryAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount"></a>

```csharp
private void PutStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaServicesAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetKeyDeliveryAccessControl` <a name="ResetKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetKeyDeliveryAccessControl"></a>

```csharp
private void ResetKeyDeliveryAccessControl()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetStorageAuthenticationType` <a name="ResetStorageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetStorageAuthenticationType"></a>

```csharp
private void ResetStorageAuthenticationType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaServicesAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaServicesAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaServicesAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference">MediaServicesAccountEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference">MediaServicesAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControl">KeyDeliveryAccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference">MediaServicesAccountKeyDeliveryAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList">MediaServicesAccountStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference">MediaServicesAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControlInput">KeyDeliveryAccessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccountInput">StorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationTypeInput">StorageAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationType">StorageAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryption"></a>

```csharp
public MediaServicesAccountEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference">MediaServicesAccountEncryptionOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identity"></a>

```csharp
public MediaServicesAccountIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference">MediaServicesAccountIdentityOutputReference</a>

---

##### `KeyDeliveryAccessControl`<sup>Required</sup> <a name="KeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControl"></a>

```csharp
public MediaServicesAccountKeyDeliveryAccessControlOutputReference KeyDeliveryAccessControl { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference">MediaServicesAccountKeyDeliveryAccessControlOutputReference</a>

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccount"></a>

```csharp
public MediaServicesAccountStorageAccountList StorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList">MediaServicesAccountStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeouts"></a>

```csharp
public MediaServicesAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference">MediaServicesAccountTimeoutsOutputReference</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.encryptionInput"></a>

```csharp
public MediaServicesAccountEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.identityInput"></a>

```csharp
public MediaServicesAccountIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyDeliveryAccessControlInput`<sup>Optional</sup> <a name="KeyDeliveryAccessControlInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.keyDeliveryAccessControlInput"></a>

```csharp
public MediaServicesAccountKeyDeliveryAccessControl KeyDeliveryAccessControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAccountInput"></a>

```csharp
public object StorageAccountInput { get; }
```

- *Type:* object

---

##### `StorageAuthenticationTypeInput`<sup>Optional</sup> <a name="StorageAuthenticationTypeInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationTypeInput"></a>

```csharp
public string StorageAuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAuthenticationType`<sup>Required</sup> <a name="StorageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.storageAuthenticationType"></a>

```csharp
public string StorageAuthenticationType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesAccountConfig <a name="MediaServicesAccountConfig" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    object StorageAccount,
    MediaServicesAccountEncryption Encryption = null,
    string Id = null,
    MediaServicesAccountIdentity Identity = null,
    MediaServicesAccountKeyDeliveryAccessControl KeyDeliveryAccessControl = null,
    object PublicNetworkAccessEnabled = null,
    string StorageAuthenticationType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MediaServicesAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#location MediaServicesAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#name MediaServicesAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAccount">StorageAccount</a></code> | <code>object</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.keyDeliveryAccessControl">KeyDeliveryAccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | key_delivery_access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAuthenticationType">StorageAuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#tags MediaServicesAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#location MediaServicesAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#name MediaServicesAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}.

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAccount"></a>

```csharp
public object StorageAccount { get; set; }
```

- *Type:* object

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#storage_account MediaServicesAccount#storage_account}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.encryption"></a>

```csharp
public MediaServicesAccountEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#encryption MediaServicesAccount#encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.identity"></a>

```csharp
public MediaServicesAccountIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#identity MediaServicesAccount#identity}

---

##### `KeyDeliveryAccessControl`<sup>Optional</sup> <a name="KeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.keyDeliveryAccessControl"></a>

```csharp
public MediaServicesAccountKeyDeliveryAccessControl KeyDeliveryAccessControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

key_delivery_access_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}.

---

##### `StorageAuthenticationType`<sup>Optional</sup> <a name="StorageAuthenticationType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.storageAuthenticationType"></a>

```csharp
public string StorageAuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#tags MediaServicesAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountConfig.property.timeouts"></a>

```csharp
public MediaServicesAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts">MediaServicesAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#timeouts MediaServicesAccount#timeouts}

---

### MediaServicesAccountEncryption <a name="MediaServicesAccountEncryption" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountEncryption {
    string KeyVaultKeyIdentifier = null,
    MediaServicesAccountEncryptionManagedIdentity ManagedIdentity = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.keyVaultKeyIdentifier">KeyVaultKeyIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#type MediaServicesAccount#type}. |

---

##### `KeyVaultKeyIdentifier`<sup>Optional</sup> <a name="KeyVaultKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.keyVaultKeyIdentifier"></a>

```csharp
public string KeyVaultKeyIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}.

---

##### `ManagedIdentity`<sup>Optional</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.managedIdentity"></a>

```csharp
public MediaServicesAccountEncryptionManagedIdentity ManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#type MediaServicesAccount#type}.

---

### MediaServicesAccountEncryptionManagedIdentity <a name="MediaServicesAccountEncryptionManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountEncryptionManagedIdentity {
    string UserAssignedIdentityId = null,
    object UseSystemAssignedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.useSystemAssignedIdentity">UseSystemAssignedIdentity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}. |

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

##### `UseSystemAssignedIdentity`<sup>Optional</sup> <a name="UseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity.property.useSystemAssignedIdentity"></a>

```csharp
public object UseSystemAssignedIdentity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

### MediaServicesAccountIdentity <a name="MediaServicesAccountIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#type MediaServicesAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#identity_ids MediaServicesAccount#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#type MediaServicesAccount#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#identity_ids MediaServicesAccount#identity_ids}.

---

### MediaServicesAccountKeyDeliveryAccessControl <a name="MediaServicesAccountKeyDeliveryAccessControl" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountKeyDeliveryAccessControl {
    string DefaultAction = null,
    string[] IpAllowList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#default_action MediaServicesAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.ipAllowList">IpAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#default_action MediaServicesAccount#default_action}.

---

##### `IpAllowList`<sup>Optional</sup> <a name="IpAllowList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl.property.ipAllowList"></a>

```csharp
public string[] IpAllowList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}.

---

### MediaServicesAccountStorageAccount <a name="MediaServicesAccountStorageAccount" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountStorageAccount {
    string Id,
    object IsPrimary = null,
    MediaServicesAccountStorageAccountManagedIdentity ManagedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#id MediaServicesAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.isPrimary">IsPrimary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#is_primary MediaServicesAccount#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | managed_identity block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#id MediaServicesAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPrimary`<sup>Optional</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.isPrimary"></a>

```csharp
public object IsPrimary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#is_primary MediaServicesAccount#is_primary}.

---

##### `ManagedIdentity`<sup>Optional</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccount.property.managedIdentity"></a>

```csharp
public MediaServicesAccountStorageAccountManagedIdentity ManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#managed_identity MediaServicesAccount#managed_identity}

---

### MediaServicesAccountStorageAccountManagedIdentity <a name="MediaServicesAccountStorageAccountManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountStorageAccountManagedIdentity {
    string UserAssignedIdentityId = null,
    object UseSystemAssignedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.useSystemAssignedIdentity">UseSystemAssignedIdentity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}. |

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}.

---

##### `UseSystemAssignedIdentity`<sup>Optional</sup> <a name="UseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity.property.useSystemAssignedIdentity"></a>

```csharp
public object UseSystemAssignedIdentity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}.

---

### MediaServicesAccountTimeouts <a name="MediaServicesAccountTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#create MediaServicesAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#delete MediaServicesAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#read MediaServicesAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#update MediaServicesAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#create MediaServicesAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#delete MediaServicesAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#read MediaServicesAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_services_account#update MediaServicesAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesAccountEncryptionManagedIdentityOutputReference <a name="MediaServicesAccountEncryptionManagedIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountEncryptionManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUseSystemAssignedIdentity">ResetUseSystemAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

##### `ResetUseSystemAssignedIdentity` <a name="ResetUseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.resetUseSystemAssignedIdentity"></a>

```csharp
private void ResetUseSystemAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentityInput">UseSystemAssignedIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentity">UseSystemAssignedIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `UseSystemAssignedIdentityInput`<sup>Optional</sup> <a name="UseSystemAssignedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentityInput"></a>

```csharp
public object UseSystemAssignedIdentityInput { get; }
```

- *Type:* object

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `UseSystemAssignedIdentity`<sup>Required</sup> <a name="UseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.useSystemAssignedIdentity"></a>

```csharp
public object UseSystemAssignedIdentity { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public MediaServicesAccountEncryptionManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---


### MediaServicesAccountEncryptionOutputReference <a name="MediaServicesAccountEncryptionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity">PutManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetKeyVaultKeyIdentifier">ResetKeyVaultKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetManagedIdentity">ResetManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedIdentity` <a name="PutManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity"></a>

```csharp
private void PutManagedIdentity(MediaServicesAccountEncryptionManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---

##### `ResetKeyVaultKeyIdentifier` <a name="ResetKeyVaultKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetKeyVaultKeyIdentifier"></a>

```csharp
private void ResetKeyVaultKeyIdentifier()
```

##### `ResetManagedIdentity` <a name="ResetManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetManagedIdentity"></a>

```csharp
private void ResetManagedIdentity()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.currentKeyIdentifier">CurrentKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference">MediaServicesAccountEncryptionManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifierInput">KeyVaultKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentityInput">ManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifier">KeyVaultKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentKeyIdentifier`<sup>Required</sup> <a name="CurrentKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.currentKeyIdentifier"></a>

```csharp
public string CurrentKeyIdentifier { get; }
```

- *Type:* string

---

##### `ManagedIdentity`<sup>Required</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentity"></a>

```csharp
public MediaServicesAccountEncryptionManagedIdentityOutputReference ManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentityOutputReference">MediaServicesAccountEncryptionManagedIdentityOutputReference</a>

---

##### `KeyVaultKeyIdentifierInput`<sup>Optional</sup> <a name="KeyVaultKeyIdentifierInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifierInput"></a>

```csharp
public string KeyVaultKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `ManagedIdentityInput`<sup>Optional</sup> <a name="ManagedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.managedIdentityInput"></a>

```csharp
public MediaServicesAccountEncryptionManagedIdentity ManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionManagedIdentity">MediaServicesAccountEncryptionManagedIdentity</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdentifier`<sup>Required</sup> <a name="KeyVaultKeyIdentifier" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.keyVaultKeyIdentifier"></a>

```csharp
public string KeyVaultKeyIdentifier { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryptionOutputReference.property.internalValue"></a>

```csharp
public MediaServicesAccountEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountEncryption">MediaServicesAccountEncryption</a>

---


### MediaServicesAccountIdentityOutputReference <a name="MediaServicesAccountIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public MediaServicesAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountIdentity">MediaServicesAccountIdentity</a>

---


### MediaServicesAccountKeyDeliveryAccessControlOutputReference <a name="MediaServicesAccountKeyDeliveryAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountKeyDeliveryAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetIpAllowList">ResetIpAllowList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetIpAllowList` <a name="ResetIpAllowList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.resetIpAllowList"></a>

```csharp
private void ResetIpAllowList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowListInput">IpAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowList">IpAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpAllowListInput`<sup>Optional</sup> <a name="IpAllowListInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowListInput"></a>

```csharp
public string[] IpAllowListInput { get; }
```

- *Type:* string[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `IpAllowList`<sup>Required</sup> <a name="IpAllowList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.ipAllowList"></a>

```csharp
public string[] IpAllowList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControlOutputReference.property.internalValue"></a>

```csharp
public MediaServicesAccountKeyDeliveryAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountKeyDeliveryAccessControl">MediaServicesAccountKeyDeliveryAccessControl</a>

---


### MediaServicesAccountStorageAccountList <a name="MediaServicesAccountStorageAccountList" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get"></a>

```csharp
private MediaServicesAccountStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesAccountStorageAccountManagedIdentityOutputReference <a name="MediaServicesAccountStorageAccountManagedIdentityOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountStorageAccountManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUseSystemAssignedIdentity">ResetUseSystemAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

##### `ResetUseSystemAssignedIdentity` <a name="ResetUseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.resetUseSystemAssignedIdentity"></a>

```csharp
private void ResetUseSystemAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentityInput">UseSystemAssignedIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentity">UseSystemAssignedIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `UseSystemAssignedIdentityInput`<sup>Optional</sup> <a name="UseSystemAssignedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentityInput"></a>

```csharp
public object UseSystemAssignedIdentityInput { get; }
```

- *Type:* object

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `UseSystemAssignedIdentity`<sup>Required</sup> <a name="UseSystemAssignedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.useSystemAssignedIdentity"></a>

```csharp
public object UseSystemAssignedIdentity { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public MediaServicesAccountStorageAccountManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---


### MediaServicesAccountStorageAccountOutputReference <a name="MediaServicesAccountStorageAccountOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity">PutManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetIsPrimary">ResetIsPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetManagedIdentity">ResetManagedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedIdentity` <a name="PutManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity"></a>

```csharp
private void PutManagedIdentity(MediaServicesAccountStorageAccountManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---

##### `ResetIsPrimary` <a name="ResetIsPrimary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetIsPrimary"></a>

```csharp
private void ResetIsPrimary()
```

##### `ResetManagedIdentity` <a name="ResetManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.resetManagedIdentity"></a>

```csharp
private void ResetManagedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference">MediaServicesAccountStorageAccountManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentityInput">ManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimary">IsPrimary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedIdentity`<sup>Required</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentity"></a>

```csharp
public MediaServicesAccountStorageAccountManagedIdentityOutputReference ManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentityOutputReference">MediaServicesAccountStorageAccountManagedIdentityOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimaryInput"></a>

```csharp
public object IsPrimaryInput { get; }
```

- *Type:* object

---

##### `ManagedIdentityInput`<sup>Optional</sup> <a name="ManagedIdentityInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.managedIdentityInput"></a>

```csharp
public MediaServicesAccountStorageAccountManagedIdentity ManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountManagedIdentity">MediaServicesAccountStorageAccountManagedIdentity</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.isPrimary"></a>

```csharp
public object IsPrimary { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesAccountTimeoutsOutputReference <a name="MediaServicesAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccount.MediaServicesAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



