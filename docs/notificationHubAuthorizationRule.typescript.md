# `azurerm_notification_hub_authorization_rule`

Refer to the Terraform Registory for docs: [`azurerm_notification_hub_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule).

# `notificationHubAuthorizationRule` Submodule <a name="`notificationHubAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationHubAuthorizationRule <a name="NotificationHubAuthorizationRule" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule azurerm_notification_hub_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

new notificationHubAuthorizationRule.NotificationHubAuthorizationRule(scope: Construct, id: string, config: NotificationHubAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig">NotificationHubAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig">NotificationHubAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetListen">resetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetManage">resetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetSend">resetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NotificationHubAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListen` <a name="resetListen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetListen"></a>

```typescript
public resetListen(): void
```

##### `resetManage` <a name="resetManage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetManage"></a>

```typescript
public resetManage(): void
```

##### `resetSend` <a name="resetSend" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetSend"></a>

```typescript
public resetSend(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference">NotificationHubAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listenInput">listenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manageInput">manageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubNameInput">notificationHubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.sendInput">sendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listen">listen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manage">manage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubName">notificationHubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.send">send</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: NotificationHubAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference">NotificationHubAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenInput`<sup>Optional</sup> <a name="listenInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listenInput"></a>

```typescript
public readonly listenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageInput`<sup>Optional</sup> <a name="manageInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manageInput"></a>

```typescript
public readonly manageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `notificationHubNameInput`<sup>Optional</sup> <a name="notificationHubNameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubNameInput"></a>

```typescript
public readonly notificationHubNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sendInput`<sup>Optional</sup> <a name="sendInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.sendInput"></a>

```typescript
public readonly sendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NotificationHubAuthorizationRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.listen"></a>

```typescript
public readonly listen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.manage"></a>

```typescript
public readonly manage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `notificationHubName`<sup>Required</sup> <a name="notificationHubName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.notificationHubName"></a>

```typescript
public readonly notificationHubName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.send"></a>

```typescript
public readonly send: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationHubAuthorizationRuleConfig <a name="NotificationHubAuthorizationRuleConfig" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.Initializer"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

const notificationHubAuthorizationRuleConfig: notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.notificationHubName">notificationHubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.listen">listen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.manage">manage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.send">send</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#name NotificationHubAuthorizationRule#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#namespace_name NotificationHubAuthorizationRule#namespace_name}.

---

##### `notificationHubName`<sup>Required</sup> <a name="notificationHubName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.notificationHubName"></a>

```typescript
public readonly notificationHubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#notification_hub_name NotificationHubAuthorizationRule#notification_hub_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#resource_group_name NotificationHubAuthorizationRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#id NotificationHubAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listen`<sup>Optional</sup> <a name="listen" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.listen"></a>

```typescript
public readonly listen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#listen NotificationHubAuthorizationRule#listen}.

---

##### `manage`<sup>Optional</sup> <a name="manage" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.manage"></a>

```typescript
public readonly manage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#manage NotificationHubAuthorizationRule#manage}.

---

##### `send`<sup>Optional</sup> <a name="send" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.send"></a>

```typescript
public readonly send: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#send NotificationHubAuthorizationRule#send}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NotificationHubAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#timeouts NotificationHubAuthorizationRule#timeouts}

---

### NotificationHubAuthorizationRuleTimeouts <a name="NotificationHubAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

const notificationHubAuthorizationRuleTimeouts: notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#create NotificationHubAuthorizationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#delete NotificationHubAuthorizationRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#read NotificationHubAuthorizationRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/notification_hub_authorization_rule#update NotificationHubAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationHubAuthorizationRuleTimeoutsOutputReference <a name="NotificationHubAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { notificationHubAuthorizationRule } from '@cdktf/provider-azurerm'

new notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationHubAuthorizationRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.notificationHubAuthorizationRule.NotificationHubAuthorizationRuleTimeouts">NotificationHubAuthorizationRuleTimeouts</a>

---



