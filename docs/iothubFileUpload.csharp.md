# `azurerm_iothub_file_upload`

Refer to the Terraform Registory for docs: [`azurerm_iothub_file_upload`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload).

# `iothubFileUpload` Submodule <a name="`iothubFileUpload` Submodule" id="@cdktf/provider-azurerm.iothubFileUpload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubFileUploadA <a name="IothubFileUploadA" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload azurerm_iothub_file_upload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubFileUploadA(Construct Scope, string Id, IothubFileUploadAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig">IothubFileUploadAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig">IothubFileUploadAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetLockDuration">ResetLockDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetMaxDeliveryCount">ResetMaxDeliveryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetNotificationsEnabled">ResetNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetSasTtl">ResetSasTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts"></a>

```csharp
private void PutTimeouts(IothubFileUploadTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetIdentityId"></a>

```csharp
private void ResetIdentityId()
```

##### `ResetLockDuration` <a name="ResetLockDuration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetLockDuration"></a>

```csharp
private void ResetLockDuration()
```

##### `ResetMaxDeliveryCount` <a name="ResetMaxDeliveryCount" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetMaxDeliveryCount"></a>

```csharp
private void ResetMaxDeliveryCount()
```

##### `ResetNotificationsEnabled` <a name="ResetNotificationsEnabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetNotificationsEnabled"></a>

```csharp
private void ResetNotificationsEnabled()
```

##### `ResetSasTtl` <a name="ResetSasTtl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetSasTtl"></a>

```csharp
private void ResetSasTtl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubFileUploadA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubFileUploadA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubFileUploadA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference">IothubFileUploadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubIdInput">IothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDurationInput">LockDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCountInput">MaxDeliveryCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabledInput">NotificationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtlInput">SasTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtl">DefaultTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubId">IothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDuration">LockDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabled">NotificationsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtl">SasTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeouts"></a>

```csharp
public IothubFileUploadTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference">IothubFileUploadTimeoutsOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtlInput"></a>

```csharp
public string DefaultTtlInput { get; }
```

- *Type:* string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubIdInput"></a>

```csharp
public string IothubIdInput { get; }
```

- *Type:* string

---

##### `LockDurationInput`<sup>Optional</sup> <a name="LockDurationInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDurationInput"></a>

```csharp
public string LockDurationInput { get; }
```

- *Type:* string

---

##### `MaxDeliveryCountInput`<sup>Optional</sup> <a name="MaxDeliveryCountInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCountInput"></a>

```csharp
public double MaxDeliveryCountInput { get; }
```

- *Type:* double

---

##### `NotificationsEnabledInput`<sup>Optional</sup> <a name="NotificationsEnabledInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabledInput"></a>

```csharp
public object NotificationsEnabledInput { get; }
```

- *Type:* object

---

##### `SasTtlInput`<sup>Optional</sup> <a name="SasTtlInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtlInput"></a>

```csharp
public string SasTtlInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.defaultTtl"></a>

```csharp
public string DefaultTtl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.iothubId"></a>

```csharp
public string IothubId { get; }
```

- *Type:* string

---

##### `LockDuration`<sup>Required</sup> <a name="LockDuration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.lockDuration"></a>

```csharp
public string LockDuration { get; }
```

- *Type:* string

---

##### `MaxDeliveryCount`<sup>Required</sup> <a name="MaxDeliveryCount" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; }
```

- *Type:* double

---

##### `NotificationsEnabled`<sup>Required</sup> <a name="NotificationsEnabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.notificationsEnabled"></a>

```csharp
public object NotificationsEnabled { get; }
```

- *Type:* object

---

##### `SasTtl`<sup>Required</sup> <a name="SasTtl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.sasTtl"></a>

```csharp
public string SasTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubFileUploadAConfig <a name="IothubFileUploadAConfig" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubFileUploadAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionString,
    string ContainerName,
    string IothubId,
    string AuthenticationType = null,
    string DefaultTtl = null,
    string Id = null,
    string IdentityId = null,
    string LockDuration = null,
    double MaxDeliveryCount = null,
    object NotificationsEnabled = null,
    string SasTtl = null,
    IothubFileUploadTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.iothubId">IothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.defaultTtl">DefaultTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lockDuration">LockDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.notificationsEnabled">NotificationsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.sasTtl">SasTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#connection_string IothubFileUploadA#connection_string}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#container_name IothubFileUploadA#container_name}.

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.iothubId"></a>

```csharp
public string IothubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#iothub_id IothubFileUploadA#iothub_id}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#authentication_type IothubFileUploadA#authentication_type}.

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.defaultTtl"></a>

```csharp
public string DefaultTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#default_ttl IothubFileUploadA#default_ttl}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#id IothubFileUploadA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#identity_id IothubFileUploadA#identity_id}.

---

##### `LockDuration`<sup>Optional</sup> <a name="LockDuration" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.lockDuration"></a>

```csharp
public string LockDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#lock_duration IothubFileUploadA#lock_duration}.

---

##### `MaxDeliveryCount`<sup>Optional</sup> <a name="MaxDeliveryCount" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#max_delivery_count IothubFileUploadA#max_delivery_count}.

---

##### `NotificationsEnabled`<sup>Optional</sup> <a name="NotificationsEnabled" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.notificationsEnabled"></a>

```csharp
public object NotificationsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#notifications_enabled IothubFileUploadA#notifications_enabled}.

---

##### `SasTtl`<sup>Optional</sup> <a name="SasTtl" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.sasTtl"></a>

```csharp
public string SasTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#sas_ttl IothubFileUploadA#sas_ttl}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadAConfig.property.timeouts"></a>

```csharp
public IothubFileUploadTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts">IothubFileUploadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#timeouts IothubFileUploadA#timeouts}

---

### IothubFileUploadTimeouts <a name="IothubFileUploadTimeouts" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubFileUploadTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#create IothubFileUploadA#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#delete IothubFileUploadA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#read IothubFileUploadA#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#update IothubFileUploadA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#create IothubFileUploadA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#delete IothubFileUploadA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#read IothubFileUploadA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/iothub_file_upload#update IothubFileUploadA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubFileUploadTimeoutsOutputReference <a name="IothubFileUploadTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubFileUploadTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubFileUpload.IothubFileUploadTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



