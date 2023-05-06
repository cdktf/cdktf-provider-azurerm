# `azurerm_cosmosdb_postgresql_firewall_rule`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_postgresql_firewall_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule).

# `cosmosdbPostgresqlFirewallRule` Submodule <a name="`cosmosdbPostgresqlFirewallRule` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlFirewallRule <a name="CosmosdbPostgresqlFirewallRule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule azurerm_cosmosdb_postgresql_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule(scope: Construct, id: string, config: CosmosdbPostgresqlFirewallRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig">CosmosdbPostgresqlFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig">CosmosdbPostgresqlFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbPostgresqlFirewallRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference">CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddressInput">endIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddressInput">startIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddress">endIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddress">startIpAddress</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference">CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `endIpAddressInput`<sup>Optional</sup> <a name="endIpAddressInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddressInput"></a>

```typescript
public readonly endIpAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `startIpAddressInput`<sup>Optional</sup> <a name="startIpAddressInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddressInput"></a>

```typescript
public readonly startIpAddressInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CosmosdbPostgresqlFirewallRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a> | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `endIpAddress`<sup>Required</sup> <a name="endIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddress"></a>

```typescript
public readonly endIpAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startIpAddress`<sup>Required</sup> <a name="startIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddress"></a>

```typescript
public readonly startIpAddress: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlFirewallRuleConfig <a name="CosmosdbPostgresqlFirewallRuleConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.Initializer"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlFirewallRuleConfig: cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.endIpAddress">endIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.startIpAddress">startIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}.

---

##### `endIpAddress`<sup>Required</sup> <a name="endIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.endIpAddress"></a>

```typescript
public readonly endIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}.

---

##### `startIpAddress`<sup>Required</sup> <a name="startIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.startIpAddress"></a>

```typescript
public readonly startIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlFirewallRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#timeouts CosmosdbPostgresqlFirewallRule#timeouts}

---

### CosmosdbPostgresqlFirewallRuleTimeouts <a name="CosmosdbPostgresqlFirewallRuleTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.Initializer"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlFirewallRuleTimeouts: cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference <a name="CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbPostgresqlFirewallRule } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbPostgresqlFirewallRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a> | cdktf.IResolvable

---



