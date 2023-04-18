# `azurerm_servicebus_namespace_network_rule_set`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_namespace_network_rule_set`](https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set).

# `servicebusNamespaceNetworkRuleSet` Submodule <a name="`servicebusNamespaceNetworkRuleSet` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceNetworkRuleSet <a name="ServicebusNamespaceNetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set azurerm_servicebus_namespace_network_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSet;

ServicebusNamespaceNetworkRuleSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .namespaceId(java.lang.String)
//  .defaultAction(java.lang.String)
//  .id(java.lang.String)
//  .ipRules(java.util.List<java.lang.String>)
//  .networkRules(IResolvable)
//  .networkRules(java.util.List<ServicebusNamespaceNetworkRuleSetNetworkRules>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .timeouts(ServicebusNamespaceNetworkRuleSetTimeouts)
//  .trustedServicesAllowed(java.lang.Boolean)
//  .trustedServicesAllowed(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.networkRules">networkRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.trustedServicesAllowed">trustedServicesAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.namespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.defaultAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.ipRules"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}.

---

##### `networkRules`<sup>Optional</sup> <a name="networkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.networkRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>>

network_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#network_rules ServicebusNamespaceNetworkRuleSet#network_rules}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#timeouts ServicebusNamespaceNetworkRuleSet#timeouts}

---

##### `trustedServicesAllowed`<sup>Optional</sup> <a name="trustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.trustedServicesAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules">putNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetNetworkRules">resetNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTrustedServicesAllowed">resetTrustedServicesAllowed</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNetworkRules` <a name="putNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules"></a>

```java
public void putNetworkRules(IResolvable OR java.util.List<ServicebusNamespaceNetworkRuleSetNetworkRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts"></a>

```java
public void putTimeouts(ServicebusNamespaceNetworkRuleSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetId"></a>

```java
public void resetId()
```

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetIpRules"></a>

```java
public void resetIpRules()
```

##### `resetNetworkRules` <a name="resetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetNetworkRules"></a>

```java
public void resetNetworkRules()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustedServicesAllowed` <a name="resetTrustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTrustedServicesAllowed"></a>

```java
public void resetTrustedServicesAllowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSet;

ServicebusNamespaceNetworkRuleSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSet;

ServicebusNamespaceNetworkRuleSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSet;

ServicebusNamespaceNetworkRuleSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRules">networkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference">ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRulesInput">ipRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRulesInput">networkRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowedInput">trustedServicesAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed">trustedServicesAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkRules`<sup>Required</sup> <a name="networkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRules"></a>

```java
public ServicebusNamespaceNetworkRuleSetNetworkRulesList getNetworkRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeouts"></a>

```java
public ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference">ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRulesInput"></a>

```java
public java.util.List<java.lang.String> getIpRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `networkRulesInput`<sup>Optional</sup> <a name="networkRulesInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRulesInput"></a>

```java
public java.lang.Object getNetworkRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>>

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `trustedServicesAllowedInput`<sup>Optional</sup> <a name="trustedServicesAllowedInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowedInput"></a>

```java
public java.lang.Object getTrustedServicesAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRules"></a>

```java
public java.util.List<java.lang.String> getIpRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trustedServicesAllowed`<sup>Required</sup> <a name="trustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed"></a>

```java
public java.lang.Object getTrustedServicesAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceNetworkRuleSetConfig <a name="ServicebusNamespaceNetworkRuleSetConfig" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSetConfig;

ServicebusNamespaceNetworkRuleSetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .namespaceId(java.lang.String)
//  .defaultAction(java.lang.String)
//  .id(java.lang.String)
//  .ipRules(java.util.List<java.lang.String>)
//  .networkRules(IResolvable)
//  .networkRules(java.util.List<ServicebusNamespaceNetworkRuleSetNetworkRules>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .timeouts(ServicebusNamespaceNetworkRuleSetTimeouts)
//  .trustedServicesAllowed(java.lang.Boolean)
//  .trustedServicesAllowed(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.networkRules">networkRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>></code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.trustedServicesAllowed">trustedServicesAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.ipRules"></a>

```java
public java.util.List<java.lang.String> getIpRules();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}.

---

##### `networkRules`<sup>Optional</sup> <a name="networkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.networkRules"></a>

```java
public java.lang.Object getNetworkRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>>

network_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#network_rules ServicebusNamespaceNetworkRuleSet#network_rules}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.timeouts"></a>

```java
public ServicebusNamespaceNetworkRuleSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#timeouts ServicebusNamespaceNetworkRuleSet#timeouts}

---

##### `trustedServicesAllowed`<sup>Optional</sup> <a name="trustedServicesAllowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.trustedServicesAllowed"></a>

```java
public java.lang.Object getTrustedServicesAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}.

---

### ServicebusNamespaceNetworkRuleSetNetworkRules <a name="ServicebusNamespaceNetworkRuleSetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSetNetworkRules;

ServicebusNamespaceNetworkRuleSetNetworkRules.builder()
    .subnetId(java.lang.String)
//  .ignoreMissingVnetServiceEndpoint(java.lang.Boolean)
//  .ignoreMissingVnetServiceEndpoint(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}.

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```java
public java.lang.Object getIgnoreMissingVnetServiceEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}.

---

### ServicebusNamespaceNetworkRuleSetTimeouts <a name="ServicebusNamespaceNetworkRuleSetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSetTimeouts;

ServicebusNamespaceNetworkRuleSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceNetworkRuleSetNetworkRulesList <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesList" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSetNetworkRulesList;

new ServicebusNamespaceNetworkRuleSetNetworkRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get"></a>

```java
public ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>>

---


### ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference;

new ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">resetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVnetServiceEndpoint` <a name="resetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```java
public void resetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignoreMissingVnetServiceEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```java
public java.lang.Object getIgnoreMissingVnetServiceEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```java
public java.lang.Object getIgnoreMissingVnetServiceEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a> OR com.hashicorp.cdktf.IResolvable

---


### ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference <a name="ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_namespace_network_rule_set.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference;

new ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



