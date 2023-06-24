# `azurerm_active_directory_domain_service`

Refer to the Terraform Registory for docs: [`azurerm_active_directory_domain_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service).

# `activeDirectoryDomainService` Submodule <a name="`activeDirectoryDomainService` Submodule" id="@cdktf/provider-azurerm.activeDirectoryDomainService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainService <a name="ActiveDirectoryDomainService" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service azurerm_active_directory_domain_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

new activeDirectoryDomainService.ActiveDirectoryDomainService(scope: Construct, id: string, config: ActiveDirectoryDomainServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig">ActiveDirectoryDomainServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig">ActiveDirectoryDomainServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet">putInitialReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap">putSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetDomainConfigurationType">resetDomainConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetFilteredSyncEnabled">resetFilteredSyncEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecureLdap">resetSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInitialReplicaSet` <a name="putInitialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet"></a>

```typescript
public putInitialReplicaSet(value: ActiveDirectoryDomainServiceInitialReplicaSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications"></a>

```typescript
public putNotifications(value: ActiveDirectoryDomainServiceNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---

##### `putSecureLdap` <a name="putSecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap"></a>

```typescript
public putSecureLdap(value: ActiveDirectoryDomainServiceSecureLdap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity"></a>

```typescript
public putSecurity(value: ActiveDirectoryDomainServiceSecurity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts"></a>

```typescript
public putTimeouts(value: ActiveDirectoryDomainServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---

##### `resetDomainConfigurationType` <a name="resetDomainConfigurationType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetDomainConfigurationType"></a>

```typescript
public resetDomainConfigurationType(): void
```

##### `resetFilteredSyncEnabled` <a name="resetFilteredSyncEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetFilteredSyncEnabled"></a>

```typescript
public resetFilteredSyncEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetSecureLdap` <a name="resetSecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecureLdap"></a>

```typescript
public resetSecureLdap(): void
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecurity"></a>

```typescript
public resetSecurity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSet">initialReplicaSet</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference">ActiveDirectoryDomainServiceInitialReplicaSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference">ActiveDirectoryDomainServiceNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdap">secureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference">ActiveDirectoryDomainServiceSecureLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference">ActiveDirectoryDomainServiceSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.syncOwner">syncOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference">ActiveDirectoryDomainServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationTypeInput">domainConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabledInput">filteredSyncEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSetInput">initialReplicaSetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notificationsInput">notificationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdapInput">secureLdapInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.securityInput">securityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationType">domainConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabled">filteredSyncEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `initialReplicaSet`<sup>Required</sup> <a name="initialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSet"></a>

```typescript
public readonly initialReplicaSet: ActiveDirectoryDomainServiceInitialReplicaSetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference">ActiveDirectoryDomainServiceInitialReplicaSetOutputReference</a>

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notifications"></a>

```typescript
public readonly notifications: ActiveDirectoryDomainServiceNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference">ActiveDirectoryDomainServiceNotificationsOutputReference</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `secureLdap`<sup>Required</sup> <a name="secureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdap"></a>

```typescript
public readonly secureLdap: ActiveDirectoryDomainServiceSecureLdapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference">ActiveDirectoryDomainServiceSecureLdapOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.security"></a>

```typescript
public readonly security: ActiveDirectoryDomainServiceSecurityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference">ActiveDirectoryDomainServiceSecurityOutputReference</a>

---

##### `syncOwner`<sup>Required</sup> <a name="syncOwner" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.syncOwner"></a>

```typescript
public readonly syncOwner: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference">ActiveDirectoryDomainServiceTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `domainConfigurationTypeInput`<sup>Optional</sup> <a name="domainConfigurationTypeInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationTypeInput"></a>

```typescript
public readonly domainConfigurationTypeInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `filteredSyncEnabledInput`<sup>Optional</sup> <a name="filteredSyncEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabledInput"></a>

```typescript
public readonly filteredSyncEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialReplicaSetInput`<sup>Optional</sup> <a name="initialReplicaSetInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSetInput"></a>

```typescript
public readonly initialReplicaSetInput: ActiveDirectoryDomainServiceInitialReplicaSet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: ActiveDirectoryDomainServiceNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `secureLdapInput`<sup>Optional</sup> <a name="secureLdapInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdapInput"></a>

```typescript
public readonly secureLdapInput: ActiveDirectoryDomainServiceSecureLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.securityInput"></a>

```typescript
public readonly securityInput: ActiveDirectoryDomainServiceSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ActiveDirectoryDomainServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---

##### `domainConfigurationType`<sup>Required</sup> <a name="domainConfigurationType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationType"></a>

```typescript
public readonly domainConfigurationType: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `filteredSyncEnabled`<sup>Required</sup> <a name="filteredSyncEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabled"></a>

```typescript
public readonly filteredSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceConfig <a name="ActiveDirectoryDomainServiceConfig" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceConfig: activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.initialReplicaSet">initialReplicaSet</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | initial_replica_set block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainConfigurationType">domainConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.filteredSyncEnabled">filteredSyncEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.secureLdap">secureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | secure_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}.

---

##### `initialReplicaSet`<sup>Required</sup> <a name="initialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.initialReplicaSet"></a>

```typescript
public readonly initialReplicaSet: ActiveDirectoryDomainServiceInitialReplicaSet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

initial_replica_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#initial_replica_set ActiveDirectoryDomainService#initial_replica_set}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}.

---

##### `domainConfigurationType`<sup>Optional</sup> <a name="domainConfigurationType" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainConfigurationType"></a>

```typescript
public readonly domainConfigurationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}.

---

##### `filteredSyncEnabled`<sup>Optional</sup> <a name="filteredSyncEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.filteredSyncEnabled"></a>

```typescript
public readonly filteredSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.notifications"></a>

```typescript
public readonly notifications: ActiveDirectoryDomainServiceNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notifications ActiveDirectoryDomainService#notifications}

---

##### `secureLdap`<sup>Optional</sup> <a name="secureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.secureLdap"></a>

```typescript
public readonly secureLdap: ActiveDirectoryDomainServiceSecureLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

secure_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#secure_ldap ActiveDirectoryDomainService#secure_ldap}

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.security"></a>

```typescript
public readonly security: ActiveDirectoryDomainServiceSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#security ActiveDirectoryDomainService#security}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#timeouts ActiveDirectoryDomainService#timeouts}

---

### ActiveDirectoryDomainServiceInitialReplicaSet <a name="ActiveDirectoryDomainServiceInitialReplicaSet" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceInitialReplicaSet: activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}.

---

### ActiveDirectoryDomainServiceNotifications <a name="ActiveDirectoryDomainServiceNotifications" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceNotifications: activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyDcAdmins">notifyDcAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyGlobalAdmins">notifyGlobalAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}. |

---

##### `additionalRecipients`<sup>Optional</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}.

---

##### `notifyDcAdmins`<sup>Optional</sup> <a name="notifyDcAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyDcAdmins"></a>

```typescript
public readonly notifyDcAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}.

---

##### `notifyGlobalAdmins`<sup>Optional</sup> <a name="notifyGlobalAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyGlobalAdmins"></a>

```typescript
public readonly notifyGlobalAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}.

---

### ActiveDirectoryDomainServiceSecureLdap <a name="ActiveDirectoryDomainServiceSecureLdap" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceSecureLdap: activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificate">pfxCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificatePassword">pfxCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}.

---

##### `pfxCertificate`<sup>Required</sup> <a name="pfxCertificate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificate"></a>

```typescript
public readonly pfxCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}.

---

##### `pfxCertificatePassword`<sup>Required</sup> <a name="pfxCertificatePassword" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificatePassword"></a>

```typescript
public readonly pfxCertificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}.

---

##### `externalAccessEnabled`<sup>Optional</sup> <a name="externalAccessEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.externalAccessEnabled"></a>

```typescript
public readonly externalAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}.

---

### ActiveDirectoryDomainServiceSecurity <a name="ActiveDirectoryDomainServiceSecurity" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceSecurity: activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosArmoringEnabled">kerberosArmoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosRc4EncryptionEnabled">kerberosRc4EncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.ntlmV1Enabled">ntlmV1Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncKerberosPasswords">syncKerberosPasswords</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncNtlmPasswords">syncNtlmPasswords</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncOnPremPasswords">syncOnPremPasswords</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.tlsV1Enabled">tlsV1Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}. |

---

##### `kerberosArmoringEnabled`<sup>Optional</sup> <a name="kerberosArmoringEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosArmoringEnabled"></a>

```typescript
public readonly kerberosArmoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}.

---

##### `kerberosRc4EncryptionEnabled`<sup>Optional</sup> <a name="kerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosRc4EncryptionEnabled"></a>

```typescript
public readonly kerberosRc4EncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}.

---

##### `ntlmV1Enabled`<sup>Optional</sup> <a name="ntlmV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.ntlmV1Enabled"></a>

```typescript
public readonly ntlmV1Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}.

---

##### `syncKerberosPasswords`<sup>Optional</sup> <a name="syncKerberosPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncKerberosPasswords"></a>

```typescript
public readonly syncKerberosPasswords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}.

---

##### `syncNtlmPasswords`<sup>Optional</sup> <a name="syncNtlmPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncNtlmPasswords"></a>

```typescript
public readonly syncNtlmPasswords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}.

---

##### `syncOnPremPasswords`<sup>Optional</sup> <a name="syncOnPremPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncOnPremPasswords"></a>

```typescript
public readonly syncOnPremPasswords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}.

---

##### `tlsV1Enabled`<sup>Optional</sup> <a name="tlsV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.tlsV1Enabled"></a>

```typescript
public readonly tlsV1Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}.

---

### ActiveDirectoryDomainServiceTimeouts <a name="ActiveDirectoryDomainServiceTimeouts" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

const activeDirectoryDomainServiceTimeouts: activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceInitialReplicaSetOutputReference <a name="ActiveDirectoryDomainServiceInitialReplicaSetOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

new activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.domainControllerIpAddresses">domainControllerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.externalAccessIpAddress">externalAccessIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.serviceStatus">serviceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainControllerIpAddresses`<sup>Required</sup> <a name="domainControllerIpAddresses" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.domainControllerIpAddresses"></a>

```typescript
public readonly domainControllerIpAddresses: string[];
```

- *Type:* string[]

---

##### `externalAccessIpAddress`<sup>Required</sup> <a name="externalAccessIpAddress" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.externalAccessIpAddress"></a>

```typescript
public readonly externalAccessIpAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `serviceStatus`<sup>Required</sup> <a name="serviceStatus" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.serviceStatus"></a>

```typescript
public readonly serviceStatus: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActiveDirectoryDomainServiceInitialReplicaSet;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---


### ActiveDirectoryDomainServiceNotificationsOutputReference <a name="ActiveDirectoryDomainServiceNotificationsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

new activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetAdditionalRecipients">resetAdditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyDcAdmins">resetNotifyDcAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyGlobalAdmins">resetNotifyGlobalAdmins</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalRecipients` <a name="resetAdditionalRecipients" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetAdditionalRecipients"></a>

```typescript
public resetAdditionalRecipients(): void
```

##### `resetNotifyDcAdmins` <a name="resetNotifyDcAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyDcAdmins"></a>

```typescript
public resetNotifyDcAdmins(): void
```

##### `resetNotifyGlobalAdmins` <a name="resetNotifyGlobalAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyGlobalAdmins"></a>

```typescript
public resetNotifyGlobalAdmins(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipientsInput">additionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdminsInput">notifyDcAdminsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdminsInput">notifyGlobalAdminsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins">notifyDcAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins">notifyGlobalAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipientsInput`<sup>Optional</sup> <a name="additionalRecipientsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipientsInput"></a>

```typescript
public readonly additionalRecipientsInput: string[];
```

- *Type:* string[]

---

##### `notifyDcAdminsInput`<sup>Optional</sup> <a name="notifyDcAdminsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdminsInput"></a>

```typescript
public readonly notifyDcAdminsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyGlobalAdminsInput`<sup>Optional</sup> <a name="notifyGlobalAdminsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdminsInput"></a>

```typescript
public readonly notifyGlobalAdminsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `notifyDcAdmins`<sup>Required</sup> <a name="notifyDcAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins"></a>

```typescript
public readonly notifyDcAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notifyGlobalAdmins`<sup>Required</sup> <a name="notifyGlobalAdmins" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins"></a>

```typescript
public readonly notifyGlobalAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActiveDirectoryDomainServiceNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---


### ActiveDirectoryDomainServiceSecureLdapOutputReference <a name="ActiveDirectoryDomainServiceSecureLdapOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

new activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resetExternalAccessEnabled">resetExternalAccessEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalAccessEnabled` <a name="resetExternalAccessEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resetExternalAccessEnabled"></a>

```typescript
public resetExternalAccessEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry">certificateExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint">certificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabledInput">externalAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificateInput">pfxCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePasswordInput">pfxCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled">externalAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificate">pfxCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePassword">pfxCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateExpiry`<sup>Required</sup> <a name="certificateExpiry" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry"></a>

```typescript
public readonly certificateExpiry: string;
```

- *Type:* string

---

##### `certificateThumbprint`<sup>Required</sup> <a name="certificateThumbprint" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint"></a>

```typescript
public readonly certificateThumbprint: string;
```

- *Type:* string

---

##### `publicCertificate`<sup>Required</sup> <a name="publicCertificate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalAccessEnabledInput`<sup>Optional</sup> <a name="externalAccessEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabledInput"></a>

```typescript
public readonly externalAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pfxCertificateInput`<sup>Optional</sup> <a name="pfxCertificateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificateInput"></a>

```typescript
public readonly pfxCertificateInput: string;
```

- *Type:* string

---

##### `pfxCertificatePasswordInput`<sup>Optional</sup> <a name="pfxCertificatePasswordInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePasswordInput"></a>

```typescript
public readonly pfxCertificatePasswordInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalAccessEnabled`<sup>Required</sup> <a name="externalAccessEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled"></a>

```typescript
public readonly externalAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pfxCertificate`<sup>Required</sup> <a name="pfxCertificate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificate"></a>

```typescript
public readonly pfxCertificate: string;
```

- *Type:* string

---

##### `pfxCertificatePassword`<sup>Required</sup> <a name="pfxCertificatePassword" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePassword"></a>

```typescript
public readonly pfxCertificatePassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActiveDirectoryDomainServiceSecureLdap;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---


### ActiveDirectoryDomainServiceSecurityOutputReference <a name="ActiveDirectoryDomainServiceSecurityOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

new activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosArmoringEnabled">resetKerberosArmoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosRc4EncryptionEnabled">resetKerberosRc4EncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetNtlmV1Enabled">resetNtlmV1Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncKerberosPasswords">resetSyncKerberosPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncNtlmPasswords">resetSyncNtlmPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncOnPremPasswords">resetSyncOnPremPasswords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetTlsV1Enabled">resetTlsV1Enabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKerberosArmoringEnabled` <a name="resetKerberosArmoringEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosArmoringEnabled"></a>

```typescript
public resetKerberosArmoringEnabled(): void
```

##### `resetKerberosRc4EncryptionEnabled` <a name="resetKerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosRc4EncryptionEnabled"></a>

```typescript
public resetKerberosRc4EncryptionEnabled(): void
```

##### `resetNtlmV1Enabled` <a name="resetNtlmV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetNtlmV1Enabled"></a>

```typescript
public resetNtlmV1Enabled(): void
```

##### `resetSyncKerberosPasswords` <a name="resetSyncKerberosPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncKerberosPasswords"></a>

```typescript
public resetSyncKerberosPasswords(): void
```

##### `resetSyncNtlmPasswords` <a name="resetSyncNtlmPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncNtlmPasswords"></a>

```typescript
public resetSyncNtlmPasswords(): void
```

##### `resetSyncOnPremPasswords` <a name="resetSyncOnPremPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncOnPremPasswords"></a>

```typescript
public resetSyncOnPremPasswords(): void
```

##### `resetTlsV1Enabled` <a name="resetTlsV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetTlsV1Enabled"></a>

```typescript
public resetTlsV1Enabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabledInput">kerberosArmoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabledInput">kerberosRc4EncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1EnabledInput">ntlmV1EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswordsInput">syncKerberosPasswordsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswordsInput">syncNtlmPasswordsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswordsInput">syncOnPremPasswordsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1EnabledInput">tlsV1EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled">kerberosArmoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled">kerberosRc4EncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled">ntlmV1Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords">syncKerberosPasswords</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords">syncNtlmPasswords</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords">syncOnPremPasswords</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled">tlsV1Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kerberosArmoringEnabledInput`<sup>Optional</sup> <a name="kerberosArmoringEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabledInput"></a>

```typescript
public readonly kerberosArmoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosRc4EncryptionEnabledInput`<sup>Optional</sup> <a name="kerberosRc4EncryptionEnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabledInput"></a>

```typescript
public readonly kerberosRc4EncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ntlmV1EnabledInput`<sup>Optional</sup> <a name="ntlmV1EnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1EnabledInput"></a>

```typescript
public readonly ntlmV1EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncKerberosPasswordsInput`<sup>Optional</sup> <a name="syncKerberosPasswordsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswordsInput"></a>

```typescript
public readonly syncKerberosPasswordsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncNtlmPasswordsInput`<sup>Optional</sup> <a name="syncNtlmPasswordsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswordsInput"></a>

```typescript
public readonly syncNtlmPasswordsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncOnPremPasswordsInput`<sup>Optional</sup> <a name="syncOnPremPasswordsInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswordsInput"></a>

```typescript
public readonly syncOnPremPasswordsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsV1EnabledInput`<sup>Optional</sup> <a name="tlsV1EnabledInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1EnabledInput"></a>

```typescript
public readonly tlsV1EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosArmoringEnabled`<sup>Required</sup> <a name="kerberosArmoringEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled"></a>

```typescript
public readonly kerberosArmoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kerberosRc4EncryptionEnabled`<sup>Required</sup> <a name="kerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled"></a>

```typescript
public readonly kerberosRc4EncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ntlmV1Enabled`<sup>Required</sup> <a name="ntlmV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled"></a>

```typescript
public readonly ntlmV1Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncKerberosPasswords`<sup>Required</sup> <a name="syncKerberosPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords"></a>

```typescript
public readonly syncKerberosPasswords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncNtlmPasswords`<sup>Required</sup> <a name="syncNtlmPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords"></a>

```typescript
public readonly syncNtlmPasswords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncOnPremPasswords`<sup>Required</sup> <a name="syncOnPremPasswords" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords"></a>

```typescript
public readonly syncOnPremPasswords: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsV1Enabled`<sup>Required</sup> <a name="tlsV1Enabled" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled"></a>

```typescript
public readonly tlsV1Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActiveDirectoryDomainServiceSecurity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---


### ActiveDirectoryDomainServiceTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainService } from '@cdktf/provider-azurerm'

new activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActiveDirectoryDomainServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---



