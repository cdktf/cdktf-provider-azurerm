# `azurerm_container_connected_registry`

Refer to the Terraform Registory for docs: [`azurerm_container_connected_registry`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry).

# `containerConnectedRegistry` Submodule <a name="`containerConnectedRegistry` Submodule" id="@cdktf/provider-azurerm.containerConnectedRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerConnectedRegistry <a name="ContainerConnectedRegistry" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry azurerm_container_connected_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistry(Construct Scope, string Id, ContainerConnectedRegistryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig">ContainerConnectedRegistryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig">ContainerConnectedRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetAuditLogEnabled">ResetAuditLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetClientTokenIds">ResetClientTokenIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetParentRegistryId">ResetParentRegistryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncMessageTtl">ResetSyncMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncSchedule">ResetSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncWindow">ResetSyncWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification"></a>

```csharp
private void PutNotification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putNotification.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerConnectedRegistryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>

---

##### `ResetAuditLogEnabled` <a name="ResetAuditLogEnabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetAuditLogEnabled"></a>

```csharp
private void ResetAuditLogEnabled()
```

##### `ResetClientTokenIds` <a name="ResetClientTokenIds" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetClientTokenIds"></a>

```csharp
private void ResetClientTokenIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetNotification"></a>

```csharp
private void ResetNotification()
```

##### `ResetParentRegistryId` <a name="ResetParentRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetParentRegistryId"></a>

```csharp
private void ResetParentRegistryId()
```

##### `ResetSyncMessageTtl` <a name="ResetSyncMessageTtl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncMessageTtl"></a>

```csharp
private void ResetSyncMessageTtl()
```

##### `ResetSyncSchedule` <a name="ResetSyncSchedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncSchedule"></a>

```csharp
private void ResetSyncSchedule()
```

##### `ResetSyncWindow` <a name="ResetSyncWindow" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetSyncWindow"></a>

```csharp
private void ResetSyncWindow()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerConnectedRegistry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerConnectedRegistry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerConnectedRegistry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList">ContainerConnectedRegistryNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference">ContainerConnectedRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabledInput">AuditLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIdsInput">ClientTokenIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notificationInput">NotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryIdInput">ParentRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtlInput">SyncMessageTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncScheduleInput">SyncScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenIdInput">SyncTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindowInput">SyncWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabled">AuditLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIds">ClientTokenIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryId">ContainerRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryId">ParentRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtl">SyncMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncSchedule">SyncSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenId">SyncTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindow">SyncWindow</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notification"></a>

```csharp
public ContainerConnectedRegistryNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList">ContainerConnectedRegistryNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeouts"></a>

```csharp
public ContainerConnectedRegistryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference">ContainerConnectedRegistryTimeoutsOutputReference</a>

---

##### `AuditLogEnabledInput`<sup>Optional</sup> <a name="AuditLogEnabledInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabledInput"></a>

```csharp
public object AuditLogEnabledInput { get; }
```

- *Type:* object

---

##### `ClientTokenIdsInput`<sup>Optional</sup> <a name="ClientTokenIdsInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIdsInput"></a>

```csharp
public string[] ClientTokenIdsInput { get; }
```

- *Type:* string[]

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryIdInput"></a>

```csharp
public string ContainerRegistryIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.notificationInput"></a>

```csharp
public object NotificationInput { get; }
```

- *Type:* object

---

##### `ParentRegistryIdInput`<sup>Optional</sup> <a name="ParentRegistryIdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryIdInput"></a>

```csharp
public string ParentRegistryIdInput { get; }
```

- *Type:* string

---

##### `SyncMessageTtlInput`<sup>Optional</sup> <a name="SyncMessageTtlInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtlInput"></a>

```csharp
public string SyncMessageTtlInput { get; }
```

- *Type:* string

---

##### `SyncScheduleInput`<sup>Optional</sup> <a name="SyncScheduleInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncScheduleInput"></a>

```csharp
public string SyncScheduleInput { get; }
```

- *Type:* string

---

##### `SyncTokenIdInput`<sup>Optional</sup> <a name="SyncTokenIdInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenIdInput"></a>

```csharp
public string SyncTokenIdInput { get; }
```

- *Type:* string

---

##### `SyncWindowInput`<sup>Optional</sup> <a name="SyncWindowInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindowInput"></a>

```csharp
public string SyncWindowInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuditLogEnabled`<sup>Required</sup> <a name="AuditLogEnabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.auditLogEnabled"></a>

```csharp
public object AuditLogEnabled { get; }
```

- *Type:* object

---

##### `ClientTokenIds`<sup>Required</sup> <a name="ClientTokenIds" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.clientTokenIds"></a>

```csharp
public string[] ClientTokenIds { get; }
```

- *Type:* string[]

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.containerRegistryId"></a>

```csharp
public string ContainerRegistryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentRegistryId`<sup>Required</sup> <a name="ParentRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.parentRegistryId"></a>

```csharp
public string ParentRegistryId { get; }
```

- *Type:* string

---

##### `SyncMessageTtl`<sup>Required</sup> <a name="SyncMessageTtl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncMessageTtl"></a>

```csharp
public string SyncMessageTtl { get; }
```

- *Type:* string

---

##### `SyncSchedule`<sup>Required</sup> <a name="SyncSchedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncSchedule"></a>

```csharp
public string SyncSchedule { get; }
```

- *Type:* string

---

##### `SyncTokenId`<sup>Required</sup> <a name="SyncTokenId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncTokenId"></a>

```csharp
public string SyncTokenId { get; }
```

- *Type:* string

---

##### `SyncWindow`<sup>Required</sup> <a name="SyncWindow" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.syncWindow"></a>

```csharp
public string SyncWindow { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerConnectedRegistryConfig <a name="ContainerConnectedRegistryConfig" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerRegistryId,
    string Name,
    string SyncTokenId,
    object AuditLogEnabled = null,
    string[] ClientTokenIds = null,
    string Id = null,
    string LogLevel = null,
    string Mode = null,
    object Notification = null,
    string ParentRegistryId = null,
    string SyncMessageTtl = null,
    string SyncSchedule = null,
    string SyncWindow = null,
    ContainerConnectedRegistryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncTokenId">SyncTokenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.auditLogEnabled">AuditLogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.clientTokenIds">ClientTokenIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.notification">Notification</a></code> | <code>object</code> | notification block. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.parentRegistryId">ParentRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncMessageTtl">SyncMessageTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncSchedule">SyncSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncWindow">SyncWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.containerRegistryId"></a>

```csharp
public string ContainerRegistryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `SyncTokenId`<sup>Required</sup> <a name="SyncTokenId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncTokenId"></a>

```csharp
public string SyncTokenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}.

---

##### `AuditLogEnabled`<sup>Optional</sup> <a name="AuditLogEnabled" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.auditLogEnabled"></a>

```csharp
public object AuditLogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}.

---

##### `ClientTokenIds`<sup>Optional</sup> <a name="ClientTokenIds" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.clientTokenIds"></a>

```csharp
public string[] ClientTokenIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.notification"></a>

```csharp
public object Notification { get; set; }
```

- *Type:* object

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#notification ContainerConnectedRegistry#notification}

---

##### `ParentRegistryId`<sup>Optional</sup> <a name="ParentRegistryId" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.parentRegistryId"></a>

```csharp
public string ParentRegistryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}.

---

##### `SyncMessageTtl`<sup>Optional</sup> <a name="SyncMessageTtl" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncMessageTtl"></a>

```csharp
public string SyncMessageTtl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}.

---

##### `SyncSchedule`<sup>Optional</sup> <a name="SyncSchedule" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncSchedule"></a>

```csharp
public string SyncSchedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}.

---

##### `SyncWindow`<sup>Optional</sup> <a name="SyncWindow" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.syncWindow"></a>

```csharp
public string SyncWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryConfig.property.timeouts"></a>

```csharp
public ContainerConnectedRegistryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts">ContainerConnectedRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#timeouts ContainerConnectedRegistry#timeouts}

---

### ContainerConnectedRegistryNotification <a name="ContainerConnectedRegistryNotification" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistryNotification {
    string Action,
    string Name,
    string Digest = null,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.digest">Digest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}.

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.digest"></a>

```csharp
public string Digest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotification.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}.

---

### ContainerConnectedRegistryTimeouts <a name="ContainerConnectedRegistryTimeouts" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistryTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerConnectedRegistryNotificationList <a name="ContainerConnectedRegistryNotificationList" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistryNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get"></a>

```csharp
private ContainerConnectedRegistryNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerConnectedRegistryNotificationOutputReference <a name="ContainerConnectedRegistryNotificationOutputReference" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistryNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetDigest"></a>

```csharp
private void ResetDigest()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digestInput">DigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digestInput"></a>

```csharp
public string DigestInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryNotificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerConnectedRegistryTimeoutsOutputReference <a name="ContainerConnectedRegistryTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerConnectedRegistryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerConnectedRegistry.ContainerConnectedRegistryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



