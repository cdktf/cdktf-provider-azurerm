# `azurerm_servicebus_namespace_disaster_recovery_config`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_namespace_disaster_recovery_config`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config).

# `servicebusNamespaceDisasterRecoveryConfig` Submodule <a name="`servicebusNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceDisasterRecoveryConfig <a name="ServicebusNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfig;

ServicebusNamespaceDisasterRecoveryConfig.Builder.create(Construct scope, java.lang.String id)
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
    .partnerNamespaceId(java.lang.String)
    .primaryNamespaceId(java.lang.String)
//  .aliasAuthorizationRuleId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServicebusNamespaceDisasterRecoveryConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.partnerNamespaceId">partnerNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.primaryNamespaceId">primaryNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `partnerNamespaceId`<sup>Required</sup> <a name="partnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.partnerNamespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}.

---

##### `primaryNamespaceId`<sup>Required</sup> <a name="primaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.primaryNamespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}.

---

##### `aliasAuthorizationRuleId`<sup>Optional</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.aliasAuthorizationRuleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#timeouts ServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId">resetAliasAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```java
public void putTimeouts(ServicebusNamespaceDisasterRecoveryConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `resetAliasAuthorizationRuleId` <a name="resetAliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId"></a>

```java
public void resetAliasAuthorizationRuleId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfig;

ServicebusNamespaceDisasterRecoveryConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfig;

ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfig;

ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey">defaultPrimaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey">defaultSecondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput">aliasAuthorizationRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput">partnerNamespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceIdInput">primaryNamespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">partnerNamespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceId">primaryNamespaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultPrimaryKey`<sup>Required</sup> <a name="defaultPrimaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey"></a>

```java
public java.lang.String getDefaultPrimaryKey();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryKey`<sup>Required</sup> <a name="defaultSecondaryKey" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey"></a>

```java
public java.lang.String getDefaultSecondaryKey();
```

- *Type:* java.lang.String

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias"></a>

```java
public java.lang.String getPrimaryConnectionStringAlias();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias"></a>

```java
public java.lang.String getSecondaryConnectionStringAlias();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```java
public ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `aliasAuthorizationRuleIdInput`<sup>Optional</sup> <a name="aliasAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput"></a>

```java
public java.lang.String getAliasAuthorizationRuleIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partnerNamespaceIdInput`<sup>Optional</sup> <a name="partnerNamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceIdInput"></a>

```java
public java.lang.String getPartnerNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `primaryNamespaceIdInput`<sup>Optional</sup> <a name="primaryNamespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceIdInput"></a>

```java
public java.lang.String getPrimaryNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `aliasAuthorizationRuleId`<sup>Required</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId"></a>

```java
public java.lang.String getAliasAuthorizationRuleId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partnerNamespaceId`<sup>Required</sup> <a name="partnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```java
public java.lang.String getPartnerNamespaceId();
```

- *Type:* java.lang.String

---

##### `primaryNamespaceId`<sup>Required</sup> <a name="primaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.primaryNamespaceId"></a>

```java
public java.lang.String getPrimaryNamespaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceDisasterRecoveryConfigConfig <a name="ServicebusNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfigConfig;

ServicebusNamespaceDisasterRecoveryConfigConfig.builder()
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
    .partnerNamespaceId(java.lang.String)
    .primaryNamespaceId(java.lang.String)
//  .aliasAuthorizationRuleId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServicebusNamespaceDisasterRecoveryConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId">partnerNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.primaryNamespaceId">primaryNamespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#name ServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `partnerNamespaceId`<sup>Required</sup> <a name="partnerNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.partnerNamespaceId"></a>

```java
public java.lang.String getPartnerNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}.

---

##### `primaryNamespaceId`<sup>Required</sup> <a name="primaryNamespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.primaryNamespaceId"></a>

```java
public java.lang.String getPrimaryNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}.

---

##### `aliasAuthorizationRuleId`<sup>Optional</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId"></a>

```java
public java.lang.String getAliasAuthorizationRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id ServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#id ServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```java
public ServicebusNamespaceDisasterRecoveryConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#timeouts ServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

### ServicebusNamespaceDisasterRecoveryConfigTimeouts <a name="ServicebusNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfigTimeouts;

ServicebusNamespaceDisasterRecoveryConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#create ServicebusNamespaceDisasterRecoveryConfig#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#delete ServicebusNamespaceDisasterRecoveryConfig#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#read ServicebusNamespaceDisasterRecoveryConfig#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#update ServicebusNamespaceDisasterRecoveryConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#create ServicebusNamespaceDisasterRecoveryConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#delete ServicebusNamespaceDisasterRecoveryConfig#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#read ServicebusNamespaceDisasterRecoveryConfig#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/servicebus_namespace_disaster_recovery_config#update ServicebusNamespaceDisasterRecoveryConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_disaster_recovery_config.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference;

new ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceDisasterRecoveryConfig.ServicebusNamespaceDisasterRecoveryConfigTimeouts">ServicebusNamespaceDisasterRecoveryConfigTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



