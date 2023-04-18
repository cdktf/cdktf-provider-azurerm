# `azurerm_site_recovery_replication_policy`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_replication_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy).

# `siteRecoveryReplicationPolicy` Submodule <a name="`siteRecoveryReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryReplicationPolicy <a name="SiteRecoveryReplicationPolicy" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy azurerm_site_recovery_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

new siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy(scope: Construct, id: string, config: SiteRecoveryReplicationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig">SiteRecoveryReplicationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig">SiteRecoveryReplicationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteRecoveryReplicationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isConstruct"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformElement"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformResource"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference">SiteRecoveryReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutesInput">applicationConsistentSnapshotFrequencyInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryPointRetentionInMinutesInput">recoveryPointRetentionInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutes">applicationConsistentSnapshotFrequencyInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryPointRetentionInMinutes">recoveryPointRetentionInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryReplicationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference">SiteRecoveryReplicationPolicyTimeoutsOutputReference</a>

---

##### `applicationConsistentSnapshotFrequencyInMinutesInput`<sup>Optional</sup> <a name="applicationConsistentSnapshotFrequencyInMinutesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutesInput"></a>

```typescript
public readonly applicationConsistentSnapshotFrequencyInMinutesInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryPointRetentionInMinutesInput`<sup>Optional</sup> <a name="recoveryPointRetentionInMinutesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryPointRetentionInMinutesInput"></a>

```typescript
public readonly recoveryPointRetentionInMinutesInput: number;
```

- *Type:* number

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryVaultNameInput"></a>

```typescript
public readonly recoveryVaultNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SiteRecoveryReplicationPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a> | cdktf.IResolvable

---

##### `applicationConsistentSnapshotFrequencyInMinutes`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInMinutes" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.applicationConsistentSnapshotFrequencyInMinutes"></a>

```typescript
public readonly applicationConsistentSnapshotFrequencyInMinutes: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryPointRetentionInMinutes`<sup>Required</sup> <a name="recoveryPointRetentionInMinutes" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryPointRetentionInMinutes"></a>

```typescript
public readonly recoveryPointRetentionInMinutes: number;
```

- *Type:* number

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryReplicationPolicyConfig <a name="SiteRecoveryReplicationPolicyConfig" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.Initializer"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

const siteRecoveryReplicationPolicyConfig: siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInMinutes">applicationConsistentSnapshotFrequencyInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#application_consistent_snapshot_frequency_in_minutes SiteRecoveryReplicationPolicy#application_consistent_snapshot_frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#name SiteRecoveryReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.recoveryPointRetentionInMinutes">recoveryPointRetentionInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#recovery_point_retention_in_minutes SiteRecoveryReplicationPolicy#recovery_point_retention_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#recovery_vault_name SiteRecoveryReplicationPolicy#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#resource_group_name SiteRecoveryReplicationPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#id SiteRecoveryReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationConsistentSnapshotFrequencyInMinutes`<sup>Required</sup> <a name="applicationConsistentSnapshotFrequencyInMinutes" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInMinutes"></a>

```typescript
public readonly applicationConsistentSnapshotFrequencyInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#application_consistent_snapshot_frequency_in_minutes SiteRecoveryReplicationPolicy#application_consistent_snapshot_frequency_in_minutes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#name SiteRecoveryReplicationPolicy#name}.

---

##### `recoveryPointRetentionInMinutes`<sup>Required</sup> <a name="recoveryPointRetentionInMinutes" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.recoveryPointRetentionInMinutes"></a>

```typescript
public readonly recoveryPointRetentionInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#recovery_point_retention_in_minutes SiteRecoveryReplicationPolicy#recovery_point_retention_in_minutes}.

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#recovery_vault_name SiteRecoveryReplicationPolicy#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#resource_group_name SiteRecoveryReplicationPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#id SiteRecoveryReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryReplicationPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#timeouts SiteRecoveryReplicationPolicy#timeouts}

---

### SiteRecoveryReplicationPolicyTimeouts <a name="SiteRecoveryReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.Initializer"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

const siteRecoveryReplicationPolicyTimeouts: siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#create SiteRecoveryReplicationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#delete SiteRecoveryReplicationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#read SiteRecoveryReplicationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#update SiteRecoveryReplicationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#create SiteRecoveryReplicationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#delete SiteRecoveryReplicationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#read SiteRecoveryReplicationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/site_recovery_replication_policy#update SiteRecoveryReplicationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryReplicationPolicyTimeoutsOutputReference <a name="SiteRecoveryReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteRecoveryReplicationPolicy } from '@cdktf/provider-azurerm'

new siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SiteRecoveryReplicationPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationPolicy.SiteRecoveryReplicationPolicyTimeouts">SiteRecoveryReplicationPolicyTimeouts</a> | cdktf.IResolvable

---



