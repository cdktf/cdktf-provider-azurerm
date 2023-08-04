# `azurerm_mssql_server_microsoft_support_auditing_policy`

Refer to the Terraform Registory for docs: [`azurerm_mssql_server_microsoft_support_auditing_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy).

# `mssqlServerMicrosoftSupportAuditingPolicy` Submodule <a name="`mssqlServerMicrosoftSupportAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerMicrosoftSupportAuditingPolicy <a name="MssqlServerMicrosoftSupportAuditingPolicy" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy azurerm_mssql_server_microsoft_support_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerMicrosoftSupportAuditingPolicy(Construct Scope, string Id, MssqlServerMicrosoftSupportAuditingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig">MssqlServerMicrosoftSupportAuditingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig">MssqlServerMicrosoftSupportAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetBlobStorageEndpoint">ResetBlobStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetLogMonitoringEnabled">ResetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountSubscriptionId">ResetStorageAccountSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlServerMicrosoftSupportAuditingPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>

---

##### `ResetBlobStorageEndpoint` <a name="ResetBlobStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetBlobStorageEndpoint"></a>

```csharp
private void ResetBlobStorageEndpoint()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogMonitoringEnabled` <a name="ResetLogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetLogMonitoringEnabled"></a>

```csharp
private void ResetLogMonitoringEnabled()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountAccessKey"></a>

```csharp
private void ResetStorageAccountAccessKey()
```

##### `ResetStorageAccountSubscriptionId` <a name="ResetStorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountSubscriptionId"></a>

```csharp
private void ResetStorageAccountSubscriptionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerMicrosoftSupportAuditingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerMicrosoftSupportAuditingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerMicrosoftSupportAuditingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference">MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpointInput">BlobStorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabledInput">LogMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionIdInput">StorageAccountSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpoint">BlobStorageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeouts"></a>

```csharp
public MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference">MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference</a>

---

##### `BlobStorageEndpointInput`<sup>Optional</sup> <a name="BlobStorageEndpointInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpointInput"></a>

```csharp
public string BlobStorageEndpointInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogMonitoringEnabledInput`<sup>Optional</sup> <a name="LogMonitoringEnabledInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabledInput"></a>

```csharp
public object LogMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountSubscriptionIdInput`<sup>Optional</sup> <a name="StorageAccountSubscriptionIdInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionIdInput"></a>

```csharp
public string StorageAccountSubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BlobStorageEndpoint`<sup>Required</sup> <a name="BlobStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpoint"></a>

```csharp
public string BlobStorageEndpoint { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogMonitoringEnabled`<sup>Required</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabled"></a>

```csharp
public object LogMonitoringEnabled { get; }
```

- *Type:* object

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountSubscriptionId`<sup>Required</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionId"></a>

```csharp
public string StorageAccountSubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerMicrosoftSupportAuditingPolicyConfig <a name="MssqlServerMicrosoftSupportAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerMicrosoftSupportAuditingPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServerId,
    string BlobStorageEndpoint = null,
    object Enabled = null,
    string Id = null,
    object LogMonitoringEnabled = null,
    string StorageAccountAccessKey = null,
    string StorageAccountSubscriptionId = null,
    MssqlServerMicrosoftSupportAuditingPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.blobStorageEndpoint">BlobStorageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}.

---

##### `BlobStorageEndpoint`<sup>Optional</sup> <a name="BlobStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.blobStorageEndpoint"></a>

```csharp
public string BlobStorageEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogMonitoringEnabled`<sup>Optional</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```csharp
public object LogMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}.

---

##### `StorageAccountSubscriptionId`<sup>Optional</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountSubscriptionId"></a>

```csharp
public string StorageAccountSubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.timeouts"></a>

```csharp
public MssqlServerMicrosoftSupportAuditingPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#timeouts MssqlServerMicrosoftSupportAuditingPolicy#timeouts}

---

### MssqlServerMicrosoftSupportAuditingPolicyTimeouts <a name="MssqlServerMicrosoftSupportAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerMicrosoftSupportAuditingPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference <a name="MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



