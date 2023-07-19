# `azurerm_network_manager_admin_rule_collection`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_admin_rule_collection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection).

# `networkManagerAdminRuleCollection` Submodule <a name="`networkManagerAdminRuleCollection` Submodule" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerAdminRuleCollection <a name="NetworkManagerAdminRuleCollection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection azurerm_network_manager_admin_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollection;

NetworkManagerAdminRuleCollection.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .networkGroupIds(java.util.List<java.lang.String>)
    .securityAdminConfigurationId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkManagerAdminRuleCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#name NetworkManagerAdminRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.networkGroupIds">networkGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#network_group_ids NetworkManagerAdminRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.securityAdminConfigurationId">securityAdminConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#security_admin_configuration_id NetworkManagerAdminRuleCollection#security_admin_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#description NetworkManagerAdminRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#id NetworkManagerAdminRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#name NetworkManagerAdminRuleCollection#name}.

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.networkGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#network_group_ids NetworkManagerAdminRuleCollection#network_group_ids}.

---

##### `securityAdminConfigurationId`<sup>Required</sup> <a name="securityAdminConfigurationId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.securityAdminConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#security_admin_configuration_id NetworkManagerAdminRuleCollection#security_admin_configuration_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#description NetworkManagerAdminRuleCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#id NetworkManagerAdminRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#timeouts NetworkManagerAdminRuleCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.putTimeouts"></a>

```java
public void putTimeouts(NetworkManagerAdminRuleCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollection;

NetworkManagerAdminRuleCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollection;

NetworkManagerAdminRuleCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollection;

NetworkManagerAdminRuleCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference">NetworkManagerAdminRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIdsInput">networkGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationIdInput">securityAdminConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIds">networkGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationId">securityAdminConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeouts"></a>

```java
public NetworkManagerAdminRuleCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference">NetworkManagerAdminRuleCollectionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkGroupIdsInput`<sup>Optional</sup> <a name="networkGroupIdsInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityAdminConfigurationIdInput`<sup>Optional</sup> <a name="securityAdminConfigurationIdInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationIdInput"></a>

```java
public java.lang.String getSecurityAdminConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.networkGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityAdminConfigurationId`<sup>Required</sup> <a name="securityAdminConfigurationId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.securityAdminConfigurationId"></a>

```java
public java.lang.String getSecurityAdminConfigurationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerAdminRuleCollectionConfig <a name="NetworkManagerAdminRuleCollectionConfig" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollectionConfig;

NetworkManagerAdminRuleCollectionConfig.builder()
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
    .name(java.lang.String)
    .networkGroupIds(java.util.List<java.lang.String>)
    .securityAdminConfigurationId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(NetworkManagerAdminRuleCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#name NetworkManagerAdminRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.networkGroupIds">networkGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#network_group_ids NetworkManagerAdminRuleCollection#network_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.securityAdminConfigurationId">securityAdminConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#security_admin_configuration_id NetworkManagerAdminRuleCollection#security_admin_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#description NetworkManagerAdminRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#id NetworkManagerAdminRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#name NetworkManagerAdminRuleCollection#name}.

---

##### `networkGroupIds`<sup>Required</sup> <a name="networkGroupIds" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.networkGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#network_group_ids NetworkManagerAdminRuleCollection#network_group_ids}.

---

##### `securityAdminConfigurationId`<sup>Required</sup> <a name="securityAdminConfigurationId" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.securityAdminConfigurationId"></a>

```java
public java.lang.String getSecurityAdminConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#security_admin_configuration_id NetworkManagerAdminRuleCollection#security_admin_configuration_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#description NetworkManagerAdminRuleCollection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#id NetworkManagerAdminRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionConfig.property.timeouts"></a>

```java
public NetworkManagerAdminRuleCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#timeouts NetworkManagerAdminRuleCollection#timeouts}

---

### NetworkManagerAdminRuleCollectionTimeouts <a name="NetworkManagerAdminRuleCollectionTimeouts" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollectionTimeouts;

NetworkManagerAdminRuleCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#create NetworkManagerAdminRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#delete NetworkManagerAdminRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#read NetworkManagerAdminRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#update NetworkManagerAdminRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#create NetworkManagerAdminRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#delete NetworkManagerAdminRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#read NetworkManagerAdminRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/network_manager_admin_rule_collection#update NetworkManagerAdminRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerAdminRuleCollectionTimeoutsOutputReference <a name="NetworkManagerAdminRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_manager_admin_rule_collection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference;

new NetworkManagerAdminRuleCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkManagerAdminRuleCollection.NetworkManagerAdminRuleCollectionTimeouts">NetworkManagerAdminRuleCollectionTimeouts</a>

---



