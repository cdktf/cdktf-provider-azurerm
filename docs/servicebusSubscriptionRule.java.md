# `servicebusSubscriptionRule` Submodule <a name="`servicebusSubscriptionRule` Submodule" id="@cdktf/provider-azurerm.servicebusSubscriptionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusSubscriptionRule <a name="ServicebusSubscriptionRule" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule azurerm_servicebus_subscription_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRule;

ServicebusSubscriptionRule.Builder.create(Construct scope, java.lang.String id)
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
    .filterType(java.lang.String)
    .name(java.lang.String)
    .subscriptionId(java.lang.String)
//  .action(java.lang.String)
//  .correlationFilter(ServicebusSubscriptionRuleCorrelationFilter)
//  .id(java.lang.String)
//  .sqlFilter(java.lang.String)
//  .timeouts(ServicebusSubscriptionRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.correlationFilter">correlationFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | correlation_filter block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.sqlFilter">sqlFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.filterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}.

---

##### `correlationFilter`<sup>Optional</sup> <a name="correlationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.correlationFilter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

correlation_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#correlation_filter ServicebusSubscriptionRule#correlation_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlFilter`<sup>Optional</sup> <a name="sqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.sqlFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#timeouts ServicebusSubscriptionRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter">putCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetCorrelationFilter">resetCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetSqlFilter">resetSqlFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorrelationFilter` <a name="putCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter"></a>

```java
public void putCorrelationFilter(ServicebusSubscriptionRuleCorrelationFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putCorrelationFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts"></a>

```java
public void putTimeouts(ServicebusSubscriptionRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetAction"></a>

```java
public void resetAction()
```

##### `resetCorrelationFilter` <a name="resetCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetCorrelationFilter"></a>

```java
public void resetCorrelationFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetId"></a>

```java
public void resetId()
```

##### `resetSqlFilter` <a name="resetSqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetSqlFilter"></a>

```java
public void resetSqlFilter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusSubscriptionRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRule;

ServicebusSubscriptionRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRule;

ServicebusSubscriptionRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRule;

ServicebusSubscriptionRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRule;

ServicebusSubscriptionRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicebusSubscriptionRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServicebusSubscriptionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicebusSubscriptionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicebusSubscriptionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusSubscriptionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilter">correlationFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference">ServicebusSubscriptionRuleCorrelationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterCompatibilityLevel">sqlFilterCompatibilityLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference">ServicebusSubscriptionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilterInput">correlationFilterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterInput">sqlFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilter">sqlFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `correlationFilter`<sup>Required</sup> <a name="correlationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilter"></a>

```java
public ServicebusSubscriptionRuleCorrelationFilterOutputReference getCorrelationFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference">ServicebusSubscriptionRuleCorrelationFilterOutputReference</a>

---

##### `sqlFilterCompatibilityLevel`<sup>Required</sup> <a name="sqlFilterCompatibilityLevel" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterCompatibilityLevel"></a>

```java
public java.lang.Number getSqlFilterCompatibilityLevel();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeouts"></a>

```java
public ServicebusSubscriptionRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference">ServicebusSubscriptionRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `correlationFilterInput`<sup>Optional</sup> <a name="correlationFilterInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.correlationFilterInput"></a>

```java
public ServicebusSubscriptionRuleCorrelationFilter getCorrelationFilterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sqlFilterInput`<sup>Optional</sup> <a name="sqlFilterInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilterInput"></a>

```java
public java.lang.String getSqlFilterInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sqlFilter`<sup>Required</sup> <a name="sqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.sqlFilter"></a>

```java
public java.lang.String getSqlFilter();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusSubscriptionRuleConfig <a name="ServicebusSubscriptionRuleConfig" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRuleConfig;

ServicebusSubscriptionRuleConfig.builder()
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
    .filterType(java.lang.String)
    .name(java.lang.String)
    .subscriptionId(java.lang.String)
//  .action(java.lang.String)
//  .correlationFilter(ServicebusSubscriptionRuleCorrelationFilter)
//  .id(java.lang.String)
//  .sqlFilter(java.lang.String)
//  .timeouts(ServicebusSubscriptionRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.correlationFilter">correlationFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | correlation_filter block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.sqlFilter">sqlFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#filter_type ServicebusSubscriptionRule#filter_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#name ServicebusSubscriptionRule#name}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#subscription_id ServicebusSubscriptionRule#subscription_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#action ServicebusSubscriptionRule#action}.

---

##### `correlationFilter`<sup>Optional</sup> <a name="correlationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.correlationFilter"></a>

```java
public ServicebusSubscriptionRuleCorrelationFilter getCorrelationFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

correlation_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#correlation_filter ServicebusSubscriptionRule#correlation_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#id ServicebusSubscriptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlFilter`<sup>Optional</sup> <a name="sqlFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.sqlFilter"></a>

```java
public java.lang.String getSqlFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#sql_filter ServicebusSubscriptionRule#sql_filter}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleConfig.property.timeouts"></a>

```java
public ServicebusSubscriptionRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#timeouts ServicebusSubscriptionRule#timeouts}

---

### ServicebusSubscriptionRuleCorrelationFilter <a name="ServicebusSubscriptionRuleCorrelationFilter" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRuleCorrelationFilter;

ServicebusSubscriptionRuleCorrelationFilter.builder()
//  .contentType(java.lang.String)
//  .correlationId(java.lang.String)
//  .label(java.lang.String)
//  .messageId(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .replyTo(java.lang.String)
//  .replyToSessionId(java.lang.String)
//  .sessionId(java.lang.String)
//  .to(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.correlationId">correlationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.messageId">messageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyToSessionId">replyToSessionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.to">to</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#content_type ServicebusSubscriptionRule#content_type}.

---

##### `correlationId`<sup>Optional</sup> <a name="correlationId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.correlationId"></a>

```java
public java.lang.String getCorrelationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#correlation_id ServicebusSubscriptionRule#correlation_id}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#label ServicebusSubscriptionRule#label}.

---

##### `messageId`<sup>Optional</sup> <a name="messageId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.messageId"></a>

```java
public java.lang.String getMessageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#message_id ServicebusSubscriptionRule#message_id}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#properties ServicebusSubscriptionRule#properties}.

---

##### `replyTo`<sup>Optional</sup> <a name="replyTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#reply_to ServicebusSubscriptionRule#reply_to}.

---

##### `replyToSessionId`<sup>Optional</sup> <a name="replyToSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.replyToSessionId"></a>

```java
public java.lang.String getReplyToSessionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#reply_to_session_id ServicebusSubscriptionRule#reply_to_session_id}.

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#session_id ServicebusSubscriptionRule#session_id}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#to ServicebusSubscriptionRule#to}.

---

### ServicebusSubscriptionRuleTimeouts <a name="ServicebusSubscriptionRuleTimeouts" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRuleTimeouts;

ServicebusSubscriptionRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#create ServicebusSubscriptionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#delete ServicebusSubscriptionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#read ServicebusSubscriptionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/servicebus_subscription_rule#update ServicebusSubscriptionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusSubscriptionRuleCorrelationFilterOutputReference <a name="ServicebusSubscriptionRuleCorrelationFilterOutputReference" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRuleCorrelationFilterOutputReference;

new ServicebusSubscriptionRuleCorrelationFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetCorrelationId">resetCorrelationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetMessageId">resetMessageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyTo">resetReplyTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyToSessionId">resetReplyToSessionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetSessionId">resetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCorrelationId` <a name="resetCorrelationId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetCorrelationId"></a>

```java
public void resetCorrelationId()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetMessageId` <a name="resetMessageId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetMessageId"></a>

```java
public void resetMessageId()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetReplyTo` <a name="resetReplyTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyTo"></a>

```java
public void resetReplyTo()
```

##### `resetReplyToSessionId` <a name="resetReplyToSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetReplyToSessionId"></a>

```java
public void resetReplyToSessionId()
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetSessionId"></a>

```java
public void resetSessionId()
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.resetTo"></a>

```java
public void resetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationIdInput">correlationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageIdInput">messageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToInput">replyToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionIdInput">replyToSessionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionIdInput">sessionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.toInput">toInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationId">correlationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageId">messageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyTo">replyTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionId">replyToSessionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `correlationIdInput`<sup>Optional</sup> <a name="correlationIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationIdInput"></a>

```java
public java.lang.String getCorrelationIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `messageIdInput`<sup>Optional</sup> <a name="messageIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageIdInput"></a>

```java
public java.lang.String getMessageIdInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `replyToInput`<sup>Optional</sup> <a name="replyToInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToInput"></a>

```java
public java.lang.String getReplyToInput();
```

- *Type:* java.lang.String

---

##### `replyToSessionIdInput`<sup>Optional</sup> <a name="replyToSessionIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionIdInput"></a>

```java
public java.lang.String getReplyToSessionIdInput();
```

- *Type:* java.lang.String

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionIdInput"></a>

```java
public java.lang.String getSessionIdInput();
```

- *Type:* java.lang.String

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.toInput"></a>

```java
public java.lang.String getToInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `correlationId`<sup>Required</sup> <a name="correlationId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.correlationId"></a>

```java
public java.lang.String getCorrelationId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.messageId"></a>

```java
public java.lang.String getMessageId();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyTo"></a>

```java
public java.lang.String getReplyTo();
```

- *Type:* java.lang.String

---

##### `replyToSessionId`<sup>Required</sup> <a name="replyToSessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.replyToSessionId"></a>

```java
public java.lang.String getReplyToSessionId();
```

- *Type:* java.lang.String

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilterOutputReference.property.internalValue"></a>

```java
public ServicebusSubscriptionRuleCorrelationFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleCorrelationFilter">ServicebusSubscriptionRuleCorrelationFilter</a>

---


### ServicebusSubscriptionRuleTimeoutsOutputReference <a name="ServicebusSubscriptionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription_rule.ServicebusSubscriptionRuleTimeoutsOutputReference;

new ServicebusSubscriptionRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscriptionRule.ServicebusSubscriptionRuleTimeouts">ServicebusSubscriptionRuleTimeouts</a>

---



