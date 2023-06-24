# `azurerm_active_directory_domain_service`

Refer to the Terraform Registory for docs: [`azurerm_active_directory_domain_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service).

# `activeDirectoryDomainService` Submodule <a name="`activeDirectoryDomainService` Submodule" id="@cdktf/provider-azurerm.activeDirectoryDomainService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainService <a name="ActiveDirectoryDomainService" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service azurerm_active_directory_domain_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainService(Construct Scope, string Id, ActiveDirectoryDomainServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig">ActiveDirectoryDomainServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig">ActiveDirectoryDomainServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet">PutInitialReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap">PutSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetDomainConfigurationType">ResetDomainConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetFilteredSyncEnabled">ResetFilteredSyncEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecureLdap">ResetSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInitialReplicaSet` <a name="PutInitialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet"></a>

```csharp
private void PutInitialReplicaSet(ActiveDirectoryDomainServiceInitialReplicaSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications"></a>

```csharp
private void PutNotifications(ActiveDirectoryDomainServiceNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---

##### `PutSecureLdap` <a name="PutSecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap"></a>

```csharp
private void PutSecureLdap(ActiveDirectoryDomainServiceSecureLdap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity"></a>

```csharp
private void PutSecurity(ActiveDirectoryDomainServiceSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts"></a>

```csharp
private void PutTimeouts(ActiveDirectoryDomainServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---

##### `ResetDomainConfigurationType` <a name="ResetDomainConfigurationType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetDomainConfigurationType"></a>

```csharp
private void ResetDomainConfigurationType()
```

##### `ResetFilteredSyncEnabled` <a name="ResetFilteredSyncEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetFilteredSyncEnabled"></a>

```csharp
private void ResetFilteredSyncEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetSecureLdap` <a name="ResetSecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecureLdap"></a>

```csharp
private void ResetSecureLdap()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecurity"></a>

```csharp
private void ResetSecurity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ActiveDirectoryDomainService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSet">InitialReplicaSet</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference">ActiveDirectoryDomainServiceInitialReplicaSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference">ActiveDirectoryDomainServiceNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdap">SecureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference">ActiveDirectoryDomainServiceSecureLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference">ActiveDirectoryDomainServiceSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.syncOwner">SyncOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference">ActiveDirectoryDomainServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationTypeInput">DomainConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabledInput">FilteredSyncEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSetInput">InitialReplicaSetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notificationsInput">NotificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdapInput">SecureLdapInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationType">DomainConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabled">FilteredSyncEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `InitialReplicaSet`<sup>Required</sup> <a name="InitialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSet"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSetOutputReference InitialReplicaSet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference">ActiveDirectoryDomainServiceInitialReplicaSetOutputReference</a>

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notifications"></a>

```csharp
public ActiveDirectoryDomainServiceNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference">ActiveDirectoryDomainServiceNotificationsOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `SecureLdap`<sup>Required</sup> <a name="SecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdap"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdapOutputReference SecureLdap { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference">ActiveDirectoryDomainServiceSecureLdapOutputReference</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.security"></a>

```csharp
public ActiveDirectoryDomainServiceSecurityOutputReference Security { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference">ActiveDirectoryDomainServiceSecurityOutputReference</a>

---

##### `SyncOwner`<sup>Required</sup> <a name="SyncOwner" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.syncOwner"></a>

```csharp
public string SyncOwner { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference">ActiveDirectoryDomainServiceTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `DomainConfigurationTypeInput`<sup>Optional</sup> <a name="DomainConfigurationTypeInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationTypeInput"></a>

```csharp
public string DomainConfigurationTypeInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `FilteredSyncEnabledInput`<sup>Optional</sup> <a name="FilteredSyncEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabledInput"></a>

```csharp
public object FilteredSyncEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialReplicaSetInput`<sup>Optional</sup> <a name="InitialReplicaSetInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSetInput"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSet InitialReplicaSetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notificationsInput"></a>

```csharp
public ActiveDirectoryDomainServiceNotifications NotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecureLdapInput`<sup>Optional</sup> <a name="SecureLdapInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdapInput"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdap SecureLdapInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.securityInput"></a>

```csharp
public ActiveDirectoryDomainServiceSecurity SecurityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DomainConfigurationType`<sup>Required</sup> <a name="DomainConfigurationType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationType"></a>

```csharp
public string DomainConfigurationType { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FilteredSyncEnabled`<sup>Required</sup> <a name="FilteredSyncEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabled"></a>

```csharp
public object FilteredSyncEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceConfig <a name="ActiveDirectoryDomainServiceConfig" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainName,
    ActiveDirectoryDomainServiceInitialReplicaSet InitialReplicaSet,
    string Location,
    string Name,
    string ResourceGroupName,
    string Sku,
    string DomainConfigurationType = null,
    object FilteredSyncEnabled = null,
    string Id = null,
    ActiveDirectoryDomainServiceNotifications Notifications = null,
    ActiveDirectoryDomainServiceSecureLdap SecureLdap = null,
    ActiveDirectoryDomainServiceSecurity Security = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ActiveDirectoryDomainServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.initialReplicaSet">InitialReplicaSet</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | initial_replica_set block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainConfigurationType">DomainConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.filteredSyncEnabled">FilteredSyncEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.secureLdap">SecureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | secure_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}.

---

##### `InitialReplicaSet`<sup>Required</sup> <a name="InitialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.initialReplicaSet"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSet InitialReplicaSet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

initial_replica_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#initial_replica_set ActiveDirectoryDomainService#initial_replica_set}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}.

---

##### `DomainConfigurationType`<sup>Optional</sup> <a name="DomainConfigurationType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainConfigurationType"></a>

```csharp
public string DomainConfigurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}.

---

##### `FilteredSyncEnabled`<sup>Optional</sup> <a name="FilteredSyncEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.filteredSyncEnabled"></a>

```csharp
public object FilteredSyncEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.notifications"></a>

```csharp
public ActiveDirectoryDomainServiceNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notifications ActiveDirectoryDomainService#notifications}

---

##### `SecureLdap`<sup>Optional</sup> <a name="SecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.secureLdap"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdap SecureLdap { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

secure_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#secure_ldap ActiveDirectoryDomainService#secure_ldap}

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.security"></a>

```csharp
public ActiveDirectoryDomainServiceSecurity Security { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#security ActiveDirectoryDomainService#security}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#timeouts ActiveDirectoryDomainService#timeouts}

---

### ActiveDirectoryDomainServiceInitialReplicaSet <a name="ActiveDirectoryDomainServiceInitialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceInitialReplicaSet {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}.

---

### ActiveDirectoryDomainServiceNotifications <a name="ActiveDirectoryDomainServiceNotifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceNotifications {
    string[] AdditionalRecipients = null,
    object NotifyDcAdmins = null,
    object NotifyGlobalAdmins = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyDcAdmins">NotifyDcAdmins</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyGlobalAdmins">NotifyGlobalAdmins</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}. |

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}.

---

##### `NotifyDcAdmins`<sup>Optional</sup> <a name="NotifyDcAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyDcAdmins"></a>

```csharp
public object NotifyDcAdmins { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}.

---

##### `NotifyGlobalAdmins`<sup>Optional</sup> <a name="NotifyGlobalAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyGlobalAdmins"></a>

```csharp
public object NotifyGlobalAdmins { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}.

---

### ActiveDirectoryDomainServiceSecureLdap <a name="ActiveDirectoryDomainServiceSecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecureLdap {
    object Enabled,
    string PfxCertificate,
    string PfxCertificatePassword,
    object ExternalAccessEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificate">PfxCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificatePassword">PfxCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}.

---

##### `PfxCertificate`<sup>Required</sup> <a name="PfxCertificate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificate"></a>

```csharp
public string PfxCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}.

---

##### `PfxCertificatePassword`<sup>Required</sup> <a name="PfxCertificatePassword" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificatePassword"></a>

```csharp
public string PfxCertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}.

---

##### `ExternalAccessEnabled`<sup>Optional</sup> <a name="ExternalAccessEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.externalAccessEnabled"></a>

```csharp
public object ExternalAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}.

---

### ActiveDirectoryDomainServiceSecurity <a name="ActiveDirectoryDomainServiceSecurity" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecurity {
    object KerberosArmoringEnabled = null,
    object KerberosRc4EncryptionEnabled = null,
    object NtlmV1Enabled = null,
    object SyncKerberosPasswords = null,
    object SyncNtlmPasswords = null,
    object SyncOnPremPasswords = null,
    object TlsV1Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosArmoringEnabled">KerberosArmoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosRc4EncryptionEnabled">KerberosRc4EncryptionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.ntlmV1Enabled">NtlmV1Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncKerberosPasswords">SyncKerberosPasswords</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncNtlmPasswords">SyncNtlmPasswords</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncOnPremPasswords">SyncOnPremPasswords</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.tlsV1Enabled">TlsV1Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}. |

---

##### `KerberosArmoringEnabled`<sup>Optional</sup> <a name="KerberosArmoringEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosArmoringEnabled"></a>

```csharp
public object KerberosArmoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}.

---

##### `KerberosRc4EncryptionEnabled`<sup>Optional</sup> <a name="KerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosRc4EncryptionEnabled"></a>

```csharp
public object KerberosRc4EncryptionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}.

---

##### `NtlmV1Enabled`<sup>Optional</sup> <a name="NtlmV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.ntlmV1Enabled"></a>

```csharp
public object NtlmV1Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}.

---

##### `SyncKerberosPasswords`<sup>Optional</sup> <a name="SyncKerberosPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncKerberosPasswords"></a>

```csharp
public object SyncKerberosPasswords { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}.

---

##### `SyncNtlmPasswords`<sup>Optional</sup> <a name="SyncNtlmPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncNtlmPasswords"></a>

```csharp
public object SyncNtlmPasswords { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}.

---

##### `SyncOnPremPasswords`<sup>Optional</sup> <a name="SyncOnPremPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncOnPremPasswords"></a>

```csharp
public object SyncOnPremPasswords { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}.

---

##### `TlsV1Enabled`<sup>Optional</sup> <a name="TlsV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.tlsV1Enabled"></a>

```csharp
public object TlsV1Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}.

---

### ActiveDirectoryDomainServiceTimeouts <a name="ActiveDirectoryDomainServiceTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceInitialReplicaSetOutputReference <a name="ActiveDirectoryDomainServiceInitialReplicaSetOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceInitialReplicaSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.domainControllerIpAddresses">DomainControllerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.externalAccessIpAddress">ExternalAccessIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.serviceStatus">ServiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainControllerIpAddresses`<sup>Required</sup> <a name="DomainControllerIpAddresses" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.domainControllerIpAddresses"></a>

```csharp
public string[] DomainControllerIpAddresses { get; }
```

- *Type:* string[]

---

##### `ExternalAccessIpAddress`<sup>Required</sup> <a name="ExternalAccessIpAddress" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.externalAccessIpAddress"></a>

```csharp
public string ExternalAccessIpAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ServiceStatus`<sup>Required</sup> <a name="ServiceStatus" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.serviceStatus"></a>

```csharp
public string ServiceStatus { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---


### ActiveDirectoryDomainServiceNotificationsOutputReference <a name="ActiveDirectoryDomainServiceNotificationsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyDcAdmins">ResetNotifyDcAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyGlobalAdmins">ResetNotifyGlobalAdmins</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```

##### `ResetNotifyDcAdmins` <a name="ResetNotifyDcAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyDcAdmins"></a>

```csharp
private void ResetNotifyDcAdmins()
```

##### `ResetNotifyGlobalAdmins` <a name="ResetNotifyGlobalAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyGlobalAdmins"></a>

```csharp
private void ResetNotifyGlobalAdmins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdminsInput">NotifyDcAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdminsInput">NotifyGlobalAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins">NotifyDcAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins">NotifyGlobalAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `NotifyDcAdminsInput`<sup>Optional</sup> <a name="NotifyDcAdminsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdminsInput"></a>

```csharp
public object NotifyDcAdminsInput { get; }
```

- *Type:* object

---

##### `NotifyGlobalAdminsInput`<sup>Optional</sup> <a name="NotifyGlobalAdminsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdminsInput"></a>

```csharp
public object NotifyGlobalAdminsInput { get; }
```

- *Type:* object

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `NotifyDcAdmins`<sup>Required</sup> <a name="NotifyDcAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins"></a>

```csharp
public object NotifyDcAdmins { get; }
```

- *Type:* object

---

##### `NotifyGlobalAdmins`<sup>Required</sup> <a name="NotifyGlobalAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins"></a>

```csharp
public object NotifyGlobalAdmins { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---


### ActiveDirectoryDomainServiceSecureLdapOutputReference <a name="ActiveDirectoryDomainServiceSecureLdapOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecureLdapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resetExternalAccessEnabled">ResetExternalAccessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalAccessEnabled` <a name="ResetExternalAccessEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resetExternalAccessEnabled"></a>

```csharp
private void ResetExternalAccessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry">CertificateExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint">CertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabledInput">ExternalAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificateInput">PfxCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePasswordInput">PfxCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificate">PfxCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePassword">PfxCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateExpiry`<sup>Required</sup> <a name="CertificateExpiry" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry"></a>

```csharp
public string CertificateExpiry { get; }
```

- *Type:* string

---

##### `CertificateThumbprint`<sup>Required</sup> <a name="CertificateThumbprint" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint"></a>

```csharp
public string CertificateThumbprint { get; }
```

- *Type:* string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExternalAccessEnabledInput`<sup>Optional</sup> <a name="ExternalAccessEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabledInput"></a>

```csharp
public object ExternalAccessEnabledInput { get; }
```

- *Type:* object

---

##### `PfxCertificateInput`<sup>Optional</sup> <a name="PfxCertificateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificateInput"></a>

```csharp
public string PfxCertificateInput { get; }
```

- *Type:* string

---

##### `PfxCertificatePasswordInput`<sup>Optional</sup> <a name="PfxCertificatePasswordInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePasswordInput"></a>

```csharp
public string PfxCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled"></a>

```csharp
public object ExternalAccessEnabled { get; }
```

- *Type:* object

---

##### `PfxCertificate`<sup>Required</sup> <a name="PfxCertificate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificate"></a>

```csharp
public string PfxCertificate { get; }
```

- *Type:* string

---

##### `PfxCertificatePassword`<sup>Required</sup> <a name="PfxCertificatePassword" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePassword"></a>

```csharp
public string PfxCertificatePassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---


### ActiveDirectoryDomainServiceSecurityOutputReference <a name="ActiveDirectoryDomainServiceSecurityOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosArmoringEnabled">ResetKerberosArmoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosRc4EncryptionEnabled">ResetKerberosRc4EncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetNtlmV1Enabled">ResetNtlmV1Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncKerberosPasswords">ResetSyncKerberosPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncNtlmPasswords">ResetSyncNtlmPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncOnPremPasswords">ResetSyncOnPremPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetTlsV1Enabled">ResetTlsV1Enabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKerberosArmoringEnabled` <a name="ResetKerberosArmoringEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosArmoringEnabled"></a>

```csharp
private void ResetKerberosArmoringEnabled()
```

##### `ResetKerberosRc4EncryptionEnabled` <a name="ResetKerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosRc4EncryptionEnabled"></a>

```csharp
private void ResetKerberosRc4EncryptionEnabled()
```

##### `ResetNtlmV1Enabled` <a name="ResetNtlmV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetNtlmV1Enabled"></a>

```csharp
private void ResetNtlmV1Enabled()
```

##### `ResetSyncKerberosPasswords` <a name="ResetSyncKerberosPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncKerberosPasswords"></a>

```csharp
private void ResetSyncKerberosPasswords()
```

##### `ResetSyncNtlmPasswords` <a name="ResetSyncNtlmPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncNtlmPasswords"></a>

```csharp
private void ResetSyncNtlmPasswords()
```

##### `ResetSyncOnPremPasswords` <a name="ResetSyncOnPremPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncOnPremPasswords"></a>

```csharp
private void ResetSyncOnPremPasswords()
```

##### `ResetTlsV1Enabled` <a name="ResetTlsV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetTlsV1Enabled"></a>

```csharp
private void ResetTlsV1Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabledInput">KerberosArmoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabledInput">KerberosRc4EncryptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1EnabledInput">NtlmV1EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswordsInput">SyncKerberosPasswordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswordsInput">SyncNtlmPasswordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswordsInput">SyncOnPremPasswordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1EnabledInput">TlsV1EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled">KerberosArmoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled">KerberosRc4EncryptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled">NtlmV1Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords">SyncKerberosPasswords</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords">SyncNtlmPasswords</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords">SyncOnPremPasswords</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled">TlsV1Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KerberosArmoringEnabledInput`<sup>Optional</sup> <a name="KerberosArmoringEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabledInput"></a>

```csharp
public object KerberosArmoringEnabledInput { get; }
```

- *Type:* object

---

##### `KerberosRc4EncryptionEnabledInput`<sup>Optional</sup> <a name="KerberosRc4EncryptionEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabledInput"></a>

```csharp
public object KerberosRc4EncryptionEnabledInput { get; }
```

- *Type:* object

---

##### `NtlmV1EnabledInput`<sup>Optional</sup> <a name="NtlmV1EnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1EnabledInput"></a>

```csharp
public object NtlmV1EnabledInput { get; }
```

- *Type:* object

---

##### `SyncKerberosPasswordsInput`<sup>Optional</sup> <a name="SyncKerberosPasswordsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswordsInput"></a>

```csharp
public object SyncKerberosPasswordsInput { get; }
```

- *Type:* object

---

##### `SyncNtlmPasswordsInput`<sup>Optional</sup> <a name="SyncNtlmPasswordsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswordsInput"></a>

```csharp
public object SyncNtlmPasswordsInput { get; }
```

- *Type:* object

---

##### `SyncOnPremPasswordsInput`<sup>Optional</sup> <a name="SyncOnPremPasswordsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswordsInput"></a>

```csharp
public object SyncOnPremPasswordsInput { get; }
```

- *Type:* object

---

##### `TlsV1EnabledInput`<sup>Optional</sup> <a name="TlsV1EnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1EnabledInput"></a>

```csharp
public object TlsV1EnabledInput { get; }
```

- *Type:* object

---

##### `KerberosArmoringEnabled`<sup>Required</sup> <a name="KerberosArmoringEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled"></a>

```csharp
public object KerberosArmoringEnabled { get; }
```

- *Type:* object

---

##### `KerberosRc4EncryptionEnabled`<sup>Required</sup> <a name="KerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled"></a>

```csharp
public object KerberosRc4EncryptionEnabled { get; }
```

- *Type:* object

---

##### `NtlmV1Enabled`<sup>Required</sup> <a name="NtlmV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled"></a>

```csharp
public object NtlmV1Enabled { get; }
```

- *Type:* object

---

##### `SyncKerberosPasswords`<sup>Required</sup> <a name="SyncKerberosPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords"></a>

```csharp
public object SyncKerberosPasswords { get; }
```

- *Type:* object

---

##### `SyncNtlmPasswords`<sup>Required</sup> <a name="SyncNtlmPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords"></a>

```csharp
public object SyncNtlmPasswords { get; }
```

- *Type:* object

---

##### `SyncOnPremPasswords`<sup>Required</sup> <a name="SyncOnPremPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords"></a>

```csharp
public object SyncOnPremPasswords { get; }
```

- *Type:* object

---

##### `TlsV1Enabled`<sup>Required</sup> <a name="TlsV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled"></a>

```csharp
public object TlsV1Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---


### ActiveDirectoryDomainServiceTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ActiveDirectoryDomainServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



