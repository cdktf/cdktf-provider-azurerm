# `azurerm_eventhub_namespace_customer_managed_key`

Refer to the Terraform Registory for docs: [`azurerm_eventhub_namespace_customer_managed_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key).

# `eventhubNamespaceCustomerManagedKey` Submodule <a name="`eventhubNamespaceCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceCustomerManagedKey <a name="EventhubNamespaceCustomerManagedKey" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key azurerm_eventhub_namespace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKey;

EventhubNamespaceCustomerManagedKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eventhubNamespaceId(java.lang.String)
    .keyVaultKeyIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(EventhubNamespaceCustomerManagedKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.eventhubNamespaceId">eventhubNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.keyVaultKeyIds">keyVaultKeyIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventhubNamespaceId`<sup>Required</sup> <a name="eventhubNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.eventhubNamespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}.

---

##### `keyVaultKeyIds`<sup>Required</sup> <a name="keyVaultKeyIds" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.keyVaultKeyIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#timeouts EventhubNamespaceCustomerManagedKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts"></a>

```java
public void putTimeouts(EventhubNamespaceCustomerManagedKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKey;

EventhubNamespaceCustomerManagedKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKey;

EventhubNamespaceCustomerManagedKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKey;

EventhubNamespaceCustomerManagedKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference">EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceIdInput">eventhubNamespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIdsInput">keyVaultKeyIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceId">eventhubNamespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIds">keyVaultKeyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeouts"></a>

```java
public EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference">EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `eventhubNamespaceIdInput`<sup>Optional</sup> <a name="eventhubNamespaceIdInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceIdInput"></a>

```java
public java.lang.String getEventhubNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdsInput`<sup>Optional</sup> <a name="keyVaultKeyIdsInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIdsInput"></a>

```java
public java.util.List<java.lang.String> getKeyVaultKeyIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `eventhubNamespaceId`<sup>Required</sup> <a name="eventhubNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceId"></a>

```java
public java.lang.String getEventhubNamespaceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIds`<sup>Required</sup> <a name="keyVaultKeyIds" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIds"></a>

```java
public java.util.List<java.lang.String> getKeyVaultKeyIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceCustomerManagedKeyConfig <a name="EventhubNamespaceCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKeyConfig;

EventhubNamespaceCustomerManagedKeyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eventhubNamespaceId(java.lang.String)
    .keyVaultKeyIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(EventhubNamespaceCustomerManagedKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.eventhubNamespaceId">eventhubNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.keyVaultKeyIds">keyVaultKeyIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventhubNamespaceId`<sup>Required</sup> <a name="eventhubNamespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.eventhubNamespaceId"></a>

```java
public java.lang.String getEventhubNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}.

---

##### `keyVaultKeyIds`<sup>Required</sup> <a name="keyVaultKeyIds" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.keyVaultKeyIds"></a>

```java
public java.util.List<java.lang.String> getKeyVaultKeyIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.timeouts"></a>

```java
public EventhubNamespaceCustomerManagedKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#timeouts EventhubNamespaceCustomerManagedKey#timeouts}

---

### EventhubNamespaceCustomerManagedKeyTimeouts <a name="EventhubNamespaceCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKeyTimeouts;

EventhubNamespaceCustomerManagedKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#create EventhubNamespaceCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#delete EventhubNamespaceCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#read EventhubNamespaceCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#update EventhubNamespaceCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#create EventhubNamespaceCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#delete EventhubNamespaceCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#read EventhubNamespaceCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/eventhub_namespace_customer_managed_key#update EventhubNamespaceCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference <a name="EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_customer_managed_key.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference;

new EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



